import { Category } from "../../domain/models/category.model";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryDatasource } from "../datasources/category.datasource";

/**
 * Implementación concreta del repositorio de categorías.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como adaptador
 * entre el dominio y {@link CategoryDatasource}.
 */
export class CategoryRepositoryImpl extends CategoryRepository {

  constructor(private datasource: CategoryDatasource) {
    super();
  }

  getAll(countCategories: number): Promise<Category[]> {
    return this.datasource.getAll(countCategories);
  }
}
