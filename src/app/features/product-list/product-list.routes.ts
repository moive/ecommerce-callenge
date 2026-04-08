import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Productos',
    loadComponent: () => import('./pages/product-list.page'),
  },
];

export default routes;
