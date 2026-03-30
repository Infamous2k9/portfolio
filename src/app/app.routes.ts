import { Routes } from '@angular/router';
import { Content } from './layout/content/content';

export const routes: Routes = [
  {
    path: '',
    component: Content,
  },
  {
    path: '**',
    component: Content,
  },
];
