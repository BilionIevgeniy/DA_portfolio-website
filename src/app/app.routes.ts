import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main-layout/main-layout').then((m) => m.MainLayout),
  },
  // {
  //   path: 'privacy-policy',
  //   loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  // },
  // {
  //   path: 'impressum',
  //   loadComponent: () => import('./pages/impressum/impressum.component').then(m => m.ImpressumComponent)
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
