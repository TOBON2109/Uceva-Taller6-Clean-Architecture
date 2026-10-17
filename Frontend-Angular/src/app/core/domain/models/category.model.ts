/**
 * Entidad de categoría.
 *
 * @remarks
 * Forma parte de la **capa de Domain**. Debe coincidir con el contrato
 * que devuelven los backends de Node.js y Spring Boot.
 */
export interface Category {
  id: number;
  name: string;
  description: string;
  productsCount: number;
  state: CategoryState;
}

/** Valores permitidos para el campo `state`. */
export type CategoryState = 'Activa' | 'Inactiva';
