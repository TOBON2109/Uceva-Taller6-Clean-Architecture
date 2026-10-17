import { Order } from "../../domain/models/order.model";
import { OrderRepository } from "../../domain/repositories/order.repository";
import { OrderDatasource } from "../datasources/order.datasource";

/**
 * Implementación concreta del repositorio de pedidos.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como adaptador
 * entre el dominio y {@link OrderDatasource}.
 */
export class OrderRepositoryImpl extends OrderRepository {

  constructor(private datasource: OrderDatasource) {
    super();
  }

  getAll(countOrders: number): Promise<Order[]> {
    return this.datasource.getAll(countOrders);
  }
}
