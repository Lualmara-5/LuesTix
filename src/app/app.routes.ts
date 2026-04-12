import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./pages/home/home')
            .then(m => m.Home),
   },

   {
        path: 'shop',
        loadComponent: () =>
        import('./pages/shop/shop')
            .then(m => m.Shop),
   },

   {
        path: 'collections',
        loadComponent: () =>
        import('./pages/collections/collections')
            .then(m => m.Collections),
   },

   {
        path: 'about',
        loadComponent: () =>
        import('./pages/about/about')
            .then(m => m.About),
   },
];
