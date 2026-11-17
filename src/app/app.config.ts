import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { FALLBACK_LANGUAGE, LanguageService } from './core/services/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Route params (e.g. :slug) are passed directly into component inputs.
      withComponentInputBinding(),
      // Enables routerLink + fragment="contact" to scroll to <section id="contact">.
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      // Clicking the same nav link twice scrolls again.
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: FALLBACK_LANGUAGE,
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
    }),
    // Instantiate the language service once at startup so the initial language is applied.
    provideAppInitializer(() => {
      inject(LanguageService);
    }),
  ],
};
