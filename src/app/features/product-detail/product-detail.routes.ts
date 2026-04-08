import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Producto detalle',
    loadComponent: () => import('./pages/product-detail.page'),
  },
];

export default routes;
