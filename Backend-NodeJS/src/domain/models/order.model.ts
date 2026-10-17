/**
 * Entidad de pedido.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y no depende de ningún framework.
 */
export interface Order {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  status: OrderStatus;
}

/** Valores permitidos para el campo `status` de pedido. */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';
