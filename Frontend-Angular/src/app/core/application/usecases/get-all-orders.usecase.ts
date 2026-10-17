import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';

/**
 * Caso de uso para obtener un listado de pedidos.
 *
 * @remarks
 * Forma parte de la **capa de Application** y depende únicamente del
 * contrato {@link OrderRepository}.
 */
@Injectable()
export class GetAllOrdersUseCase {

  private orderRepository = inject(OrderRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countOrders - Cantidad de registros a obtener
   */
  execute(countOrders: number): Observable<Order[]> {
    return this.orderRepository.getAll(countOrders);
  }
}
