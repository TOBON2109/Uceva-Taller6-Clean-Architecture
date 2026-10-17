import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { DataService } from '../../services/data.service';

/**
 * Implementación que consume el backend de Node.js del repositorio de categorías.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**.
 */
@Injectable()
export class CategoryNodeRepositoryImpl extends CategoryRepository {

  private dataService = inject(DataService);

  getAll(countCategories: number): Observable<Category[]> {
    return this.dataService.getAllCategoriesNode(countCategories);
  }

}
