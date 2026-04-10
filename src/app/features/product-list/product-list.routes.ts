import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Productos',
    loadComponent: () => import('./pages/product-list.page').then((m) => m.ProductListPage),
  },
];

export default routes;
