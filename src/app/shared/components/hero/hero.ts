import { Component, HostListener } from '@angular/core';
import { Header } from '../../../layout/header/header';
import { TranslatePipe } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [Header, TranslatePipe, UpperCasePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  isHovering = false;
  innerWidth = 0;
  nameTag = {
    text: 'André :)',
    hover: 'André :D',
  };
  headlineText = {
    fullstack: ['f', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'],
    developer: ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'],
  };
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  isUppercase(item: string) {
    return item === item.toUpperCase();
  }
}
