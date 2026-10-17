/**
 * Entidad de pedido.
 *
 * @remarks
 * Forma parte de la **capa de Domain**. Debe coincidir con el contrato
 * que devuelven los backends de Node.js y Spring Boot.
 */
export interface Order {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  status: OrderStatus;
}

/** Valores permitidos para el campo `status`. */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';
