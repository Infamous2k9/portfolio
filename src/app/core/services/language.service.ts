import { DOCUMENT, Injectable, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'de';

export const SUPPORTED_LANGUAGES: readonly Language[] = ['en', 'de'];
export const FALLBACK_LANGUAGE: Language = 'en';

const STORAGE_KEY = 'portfolio-language';

/**
 * Single source of truth for the active UI language.
 * Reads the stored or browser language once, applies it to ngx-translate
 * and the <html lang> attribute, and persists every change.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  readonly current = signal<Language>(this.detectInitialLanguage());
  readonly isGerman = computed(() => this.current() === 'de');

  constructor() {
    this.apply(this.current());
  }

  set(language: Language): void {
    this.current.set(language);
    this.apply(language);
    this.persist(language);
  }

  toggle(): void {
    this.set(this.isGerman() ? 'en' : 'de');
  }

  private apply(language: Language): void {
    this.translate.use(language);
    this.document.documentElement.lang = language;
  }

  private detectInitialLanguage(): Language {
    const stored = this.readStored();
    if (stored) {
      return stored;
    }
    const browserLanguage = this.document.defaultView?.navigator.language.split('-')[0];
    return this.isSupported(browserLanguage) ? browserLanguage : FALLBACK_LANGUAGE;
  }

  private isSupported(value: unknown): value is Language {
    return SUPPORTED_LANGUAGES.includes(value as Language);
  }

  private readStored(): Language | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return this.isSupported(value) ? value : null;
    } catch {
      // Storage can be blocked (e.g. private mode); fall back to detection.
      return null;
    }
  }

  private persist(language: Language): void {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore: the language still works for the current visit.
    }
  }
}
