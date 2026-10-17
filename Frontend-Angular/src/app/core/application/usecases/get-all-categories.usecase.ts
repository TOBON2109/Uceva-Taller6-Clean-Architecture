import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';

/**
 * Caso de uso para obtener un listado de categorías.
 *
 * @remarks
 * Forma parte de la **capa de Application** y depende únicamente del
 * contrato {@link CategoryRepository}.
 */
@Injectable()
export class GetAllCategoriesUseCase {

  private categoryRepository = inject(CategoryRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countCategories - Cantidad de registros a obtener
   */
  execute(countCategories: number): Observable<Category[]> {
    return this.categoryRepository.getAll(countCategories);
  }
}
