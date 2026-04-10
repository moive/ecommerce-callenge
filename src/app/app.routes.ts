import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/product-list/product-list.routes'),
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./features/product-detail/product-detail.routes'),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
