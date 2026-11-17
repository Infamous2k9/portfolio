import { Routes } from '@angular/router';
import { Content } from './layout/content/content';

export const routes: Routes = [
  {
    path: '',
    component: Content,
    title: 'André Funk | Portfolio',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./layout/project-detail/project-detail').then((m) => m.ProjectDetail),
    title: 'André Funk | Project',
  },
  {
    path: 'imprint',
    loadComponent: () => import('./layout/imprint/imprint').then((m) => m.Imprint),
    title: 'André Funk | Legal Notice',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./layout/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
    title: 'André Funk | Privacy Policy',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
