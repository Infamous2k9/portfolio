import { Component } from '@angular/core';
import { Snipet } from '../snipet/snipet';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [Snipet, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  snipets = [
    {
      icon: '/icons/Location.png',
      text: 'aboutme.snipets.text.location',
      backgroundImages: {
        mobile: '/images/02_Ripped-Paper/Option-1/Mobile/About-me-1.png',
        desktop: '/images/02_Ripped-Paper/Option-1/1-Yellow.png',
        alt: 'aboutme.snipets.background.opt1.mobile.yellow.name',
      },
    },
    {
      icon: '/icons/Relocation.png',
      text: 'aboutme.snipets.text.relocation',
      backgroundImages: {
        mobile: '/images/02_Ripped-Paper/Option-1/Mobile/About-me-2.png',
        desktop: '/images/02_Ripped-Paper/Option-1/2-bkue.png',
        alt: 'aboutme.snipets.background.opt1.mobile.blue.name',
      },
    },
    {
      icon: '/icons/Remote.png',
      text: 'aboutme.snipets.text.remote',
      backgroundImages: {
        mobile: '/images/02_Ripped-Paper/Option-1/Mobile/About-me-3.png',
        desktop: '/images/02_Ripped-Paper/Option-1/3-Orange.png',
        alt: 'aboutme.snipets.background.opt1.mobile.orange.name',
      },
    },
  ];
}
