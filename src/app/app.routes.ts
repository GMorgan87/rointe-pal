import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'installations',
    loadComponent: () => import('./pages/installations/installations.page').then( m => m.InstallationsPage),
    canActivate: [authGuard]
  },
  {
    path: 'installations/:id',
    loadComponent: () => import('./pages/installation/installation.page').then( m => m.InstallationPage),
    canActivate: [authGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard]
  },

];
