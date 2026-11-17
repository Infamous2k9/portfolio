import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer, RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  /** Keys under "privacy.sections" in the i18n files, rendered in this order. */
  protected readonly sections = [
    'controller',
    'hosting',
    'contactForm',
    'localStorage',
    'fonts',
    'rights',
    'complaint',
  ];
}
