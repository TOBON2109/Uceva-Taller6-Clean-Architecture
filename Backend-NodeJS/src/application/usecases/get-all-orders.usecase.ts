import { Order } from "../../domain/models/order.model";
import { OrderRepository } from "../../domain/repositories/order.repository";

/**
 * Caso de uso para obtener un listado de pedidos.
 *
 * @remarks
 * Forma parte de la **capa de Application** y depende únicamente
 * del contrato {@link OrderRepository}.
 */
export class GetAllOrdersUseCase {

  /**
   * @param orderRepository - Repositorio usado para acceder a la información
   */
  constructor(private orderRepository: OrderRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @param countOrders - Cantidad de registros a obtener
   * @returns Promesa que resuelve un arreglo de {@link Order}
   */
  execute(countOrders: number): Promise<Order[]> {
    return this.orderRepository.getAll(countOrders);
  }
}
