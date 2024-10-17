import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './features/product/components/product-list/product-list.component'
      ).then(c => c.ProductListComponent),
  },
];
