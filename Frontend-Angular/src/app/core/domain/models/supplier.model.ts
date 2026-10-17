/**
 * Entidad de proveedor.
 *
 * @remarks
 * Forma parte de la **capa de Domain**. Debe coincidir con el contrato
 * que devuelven los backends de Node.js y Spring Boot.
 */
export interface Supplier {
  id: number;
  company: string;
  email: string;
  phone: string;
  city: string;
  type: SupplierType;
}

/** Valores permitidos para el campo `type`. */
export type SupplierType = 'Nacional' | 'Internacional';
