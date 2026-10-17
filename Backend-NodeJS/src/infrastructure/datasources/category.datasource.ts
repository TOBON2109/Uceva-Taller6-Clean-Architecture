import { faker } from '@faker-js/faker';
import { Category, CategoryState } from "../../domain/models/category.model";

/**
 * Datasource encargado de generar categorías simulados con Faker.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**. No contiene reglas de negocio
 * y es utilizado por `CategoryRepositoryImpl`.
 */
export class CategoryDatasource {

  /** Valores disponibles para el campo `state`. */
  private readonly stateValues: CategoryState[] = [
    'Activa',
    'Inactiva',
  ];

  /**
   * Obtiene una lista de categorías simulados.
   *
   * @param countCategories - Cantidad de registros a generar
   */
  async getAll(countCategories: number): Promise<Category[]> {
    return Array.from({ length: countCategories }, (_, index) => this.generate(index + 1));
  }

  private generate(id: number): Category {
    return {
      id: id,
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      productsCount: faker.number.int({ min: 1, max: 200 }),
      state: faker.helpers.arrayElement(this.stateValues),
    };
  }
}
