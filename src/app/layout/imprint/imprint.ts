import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-imprint',
  imports: [Header, Footer, RouterLink, TranslatePipe],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  /** Keys under "imprint.sections" in the i18n files, rendered in this order. */
  protected readonly sections = ['provider', 'contact', 'liability', 'links', 'copyright'];
}
