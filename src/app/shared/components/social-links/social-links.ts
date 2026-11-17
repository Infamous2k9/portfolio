import { Component, input } from '@angular/core';
import { SOCIAL_LINKS } from '../../../core/data/site.data';

/** Round social media icons (LinkedIn, GitHub, Email). Used in hero and mobile menu. */
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
  host: {
    '[class.social-links--vertical]': 'verticalOnDesktop()',
  },
})
export class SocialLinks {
  /** Stack the icons vertically from the lg breakpoint (hero layout). */
  readonly verticalOnDesktop = input(false);

  protected readonly links = SOCIAL_LINKS;
}
