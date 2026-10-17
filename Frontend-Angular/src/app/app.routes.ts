import { Routes } from '@angular/router';
import { CategoriesPage } from './presentation/pages/categories/categories.page';
import { SuppliersPage } from './presentation/pages/suppliers/suppliers.page';
import { OrdersPage } from './presentation/pages/orders/orders.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Cada ruta renderiza la página de uno de los tres módulos funcionales.
 */
export const routes: Routes = [

  { path: 'categories', component: CategoriesPage },

  { path: 'suppliers', component: SuppliersPage },

  { path: 'orders', component: OrdersPage },
  { path: '**', redirectTo: 'categories' },
];
