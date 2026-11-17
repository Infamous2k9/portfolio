import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NAV_LINKS } from '../../core/data/site.data';
import { BrandLogo } from '../../shared/components/brand-logo/brand-logo';
import { LanguageSwitch } from '../../shared/components/language-switch/language-switch';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe, NgTemplateOutlet, BrandLogo, LanguageSwitch, SocialLinks],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly navLinks = NAV_LINKS;
  protected readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
