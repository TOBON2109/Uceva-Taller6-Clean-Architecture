import { Order } from '../core/domain/models/order.model';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    customer: 'Carlos Ramírez',
    product: 'Teclado mecánico',
    quantity: 3,
    total: 360.5,
    status: 'Pendiente',
  },
  {
    id: 2,
    customer: 'Ana Gómez',
    product: 'Mouse inalámbrico',
    quantity: 10,
    total: 1250.75,
    status: 'Enviado',
  }
];
