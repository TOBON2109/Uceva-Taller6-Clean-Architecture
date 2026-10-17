import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from "../../domain/models/order.model";

/**
 * Datasource encargado de generar pedidos simulados con Faker.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**. No contiene reglas de negocio
 * y es utilizado por `OrderRepositoryImpl`.
 */
export class OrderDatasource {

  /** Valores disponibles para el campo `status`. */
  private readonly statusValues: OrderStatus[] = [
    'Pendiente',
    'Enviado',
    'Entregado',
    'Cancelado',
  ];

  /**
   * Obtiene una lista de pedidos simulados.
   *
   * @param countOrders - Cantidad de registros a generar
   */
  async getAll(countOrders: number): Promise<Order[]> {
    return Array.from({ length: countOrders }, (_, index) => this.generate(index + 1));
  }

  private generate(id: number): Order {
    return {
      id: id,
      customer: faker.person.fullName(),
      product: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 20 }),
      total: Number(faker.commerce.price({ min: 10, max: 5000, dec: 2 })),
      status: faker.helpers.arrayElement(this.statusValues),
    };
  }
}
