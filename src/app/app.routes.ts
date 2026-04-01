import { Routes } from '@angular/router';
import { Content } from './layout/content/content';
import { Imprint } from './layout/imprint/imprint';

export const routes: Routes = [
  {
    path: '',
    component: Content,
  },
  {
    path: 'imprint',
    component: Imprint,
  },
  {
    path: '**',
    component: Content,
  },
];
