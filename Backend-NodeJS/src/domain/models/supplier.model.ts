/**
 * Entidad de proveedor.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y no depende de ningún framework.
 */
export interface Supplier {
  id: number;
  company: string;
  email: string;
  phone: string;
  city: string;
  type: SupplierType;
}

/** Valores permitidos para el campo `type` de proveedor. */
export type SupplierType = 'Nacional' | 'Internacional';
