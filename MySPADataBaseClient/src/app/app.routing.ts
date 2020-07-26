import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  // otherwise redirect to home
  { path: '', loadChildren: () => import('./MainModule/main.module').then(m => m.MainModule) },
  { path: '**', loadChildren: () => import('./MainModule/main.module').then(m => m.MainModule) },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });

