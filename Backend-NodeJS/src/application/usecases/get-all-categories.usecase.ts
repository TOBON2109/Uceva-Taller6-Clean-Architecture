import { Category } from "../../domain/models/category.model";
import { CategoryRepository } from "../../domain/repositories/category.repository";

/**
 * Caso de uso para obtener un listado de categorías.
 *
 * @remarks
 * Forma parte de la **capa de Application** y depende únicamente
 * del contrato {@link CategoryRepository}.
 */
export class GetAllCategoriesUseCase {

  /**
   * @param categoryRepository - Repositorio usado para acceder a la información
   */
  constructor(private categoryRepository: CategoryRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @param countCategories - Cantidad de registros a obtener
   * @returns Promesa que resuelve un arreglo de {@link Category}
   */
  execute(countCategories: number): Promise<Category[]> {
    return this.categoryRepository.getAll(countCategories);
  }
}
