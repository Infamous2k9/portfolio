import { TitleCasePipe } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = 'en';
  innerWidth = 0;
  toggleNav = false;

  hoverImages = {
    option1: [
      'images/00_Hand-drawn-lines/00_Header/Color-option-1/1.png',
      'images/00_Hand-drawn-lines/00_Header/Color-option-1/2.png',
      'images/00_Hand-drawn-lines/00_Header/Color-option-1/4.png',
      'images/00_Hand-drawn-lines/00_Header/Color-option-1/3.png',
      'images/00_Hand-drawn-lines/00_Header/Color-option-1/5.png',
    ],
  };
  linksEN = ['about me', 'skills', 'projects', 'contact me'];
  linksDE = ['über mich', 'skills', 'projekte', 'kontakt'];

  ngOnInit() {
    this.language = navigator.language.split('-')[0];
    this.innerWidth = window.innerWidth;
  }

  switchLang = () => {
    if (this.language === 'en') {
      this.language = 'de';
      this.useLanguage(this.language);
    } else {
      this.language = 'en';
      this.useLanguage(this.language);
    }
  };

  changeToggle = () => {
    this.toggleNav = !this.toggleNav;
  };

  isToggled = () => {
    if (!this.isMobile()) {
      this.toggleNav = false;
    }
    return this.toggleNav;
  };

  isMobile = () => {
    return this.innerWidth < 629;
  };

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  private translate = inject(TranslateService);
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
