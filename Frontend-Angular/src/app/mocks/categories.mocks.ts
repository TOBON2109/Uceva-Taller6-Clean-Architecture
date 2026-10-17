import { Category } from '../core/domain/models/category.model';

export const CATEGORIES_MOCK: Category[] = [
  {
    id: 1,
    name: 'Electrónica',
    description: 'Equipos y accesorios',
    productsCount: 45,
    state: 'Activa',
  },
  {
    id: 2,
    name: 'Hogar',
    description: 'Artículos para el hogar',
    productsCount: 120,
    state: 'Inactiva',
  }
];
