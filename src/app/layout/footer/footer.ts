import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SOCIAL_LINKS } from '../../core/data/site.data';
import { BrandLogo } from '../../shared/components/brand-logo/brand-logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe, BrandLogo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  host: {
    '[class.footer--ripped]': 'ripped()',
  },
})
export class Footer {
  /** Shows the ripped paper edge on top (used below light content, e.g. legal pages). */
  readonly ripped = input(false);

  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();
}
