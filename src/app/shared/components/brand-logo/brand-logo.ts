import { Component } from '@angular/core';

/** "<AF/>" logo. Styles are component-scoped, so they no longer leak into the page. */
@Component({
  selector: 'app-brand-logo',
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.scss',
})
export class BrandLogo {}
