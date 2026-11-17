import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ABOUT_SNIPETS } from '../../../core/data/site.data';
import { Snipet } from '../snipet/snipet';

@Component({
  selector: 'app-about-me',
  imports: [Snipet, TranslatePipe, RouterLink],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  protected readonly snipets = ABOUT_SNIPETS;
}
