import { TitleCasePipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = 'en'; //später mit local browser lang wechseln
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
    this.innerWidth = window.innerWidth;
    if (!localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') || 'en';
    }
  }

  switchLang = () => {
    if (this.language === 'en') {
      this.language = 'de';
    } else {
      this.language = 'en';
    }
    localStorage.setItem('language', this.language);
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
}
