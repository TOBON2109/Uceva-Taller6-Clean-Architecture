/**
 * Entidad de categoría.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y no depende de ningún framework.
 */
export interface Category {
  id: number;
  name: string;
  description: string;
  productsCount: number;
  state: CategoryState;
}

/** Valores permitidos para el campo `state` de categoría. */
export type CategoryState = 'Activa' | 'Inactiva';
