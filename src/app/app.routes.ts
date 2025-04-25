import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component').then((m) => m.SettingsComponent),
  },
];
