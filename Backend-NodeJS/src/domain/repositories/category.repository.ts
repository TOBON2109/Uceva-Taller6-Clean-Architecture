import { Category } from "../models/category.model";

/**
 * Contrato del repositorio de categorías.
 *
 * @remarks
 * Forma parte de la **capa de Domain**. Las implementaciones concretas
 * viven en la capa de *Infrastructure*.
 */
export abstract class CategoryRepository {

  /**
   * Obtiene un listado de categorías.
   *
   * @param countCategories - Cantidad de registros a obtener
   */
  abstract getAll(countCategories: number): Promise<Category[]>;
}
