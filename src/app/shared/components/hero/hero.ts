import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Header } from '../../../layout/header/header';
import { SocialLinks } from '../social-links/social-links';

const TITLE_FIRST = 'fullstack';
const TITLE_SECOND = 'developer';

@Component({
  selector: 'app-hero',
  imports: [Header, SocialLinks, RouterLink, TranslatePipe, UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly isHoveringImg = signal(false);
  protected readonly isHoveringWelcome = signal(false);

  /** Read by screen readers instead of the single letters. */
  protected readonly titleLabel = `${TITLE_FIRST} ${TITLE_SECOND}`;
  protected readonly titleFirstLetters = TITLE_FIRST.split('');
  protected readonly titleSecondLetters = TITLE_SECOND.split('');
}
