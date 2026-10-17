import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

/**
 * Contrato del repositorio de pedidos.
 *
 * @remarks
 * Forma parte de la **capa de Domain**. Las implementaciones (local, Node.js
 * y Spring Boot) viven en la capa de *Infrastructure*.
 */
export abstract class OrderRepository {

  /**
   * Obtiene un listado de pedidos.
   *
   * @param countOrders - Cantidad de registros a obtener
   */
  abstract getAll(countOrders: number): Observable<Order[]>;
}
