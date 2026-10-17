import { faker } from '@faker-js/faker';
import { Supplier, SupplierType } from "../../domain/models/supplier.model";

/**
 * Datasource encargado de generar proveedores simulados con Faker.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**. No contiene reglas de negocio
 * y es utilizado por `SupplierRepositoryImpl`.
 */
export class SupplierDatasource {

  /** Valores disponibles para el campo `type`. */
  private readonly typeValues: SupplierType[] = [
    'Nacional',
    'Internacional',
  ];

  /**
   * Obtiene una lista de proveedores simulados.
   *
   * @param countSuppliers - Cantidad de registros a generar
   */
  async getAll(countSuppliers: number): Promise<Supplier[]> {
    return Array.from({ length: countSuppliers }, (_, index) => this.generate(index + 1));
  }

  private generate(id: number): Supplier {
    return {
      id: id,
      company: faker.company.name(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      city: faker.location.city(),
      type: faker.helpers.arrayElement(this.typeValues),
    };
  }
}
