import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../../core/domain/models/order.model';

/**
 * Tabla que muestra un listado de pedidos.
 *
 * @remarks
 * Componente de presentación: recibe los datos por `@Input`
 * y no conoce casos de uso ni servicios.
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [BadgeAtom],
})
export class OrdersTableComponent {
  @Input() orders: Order[] = [];

  statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Enviado': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger'
  };
}
