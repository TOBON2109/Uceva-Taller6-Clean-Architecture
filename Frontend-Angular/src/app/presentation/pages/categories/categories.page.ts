import { Component, inject, OnInit } from '@angular/core';
import { GetAllCategoriesUseCase } from '../../../core/application/usecases/get-all-categories.usecase';
import { Category } from '../../../core/domain/models/category.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Página de categorías.
 *
 * @remarks
 * Forma parte de la capa de presentación. Usa únicamente el caso de uso
 * {@link GetAllCategoriesUseCase}, nunca servicios ni APIs directamente.
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  imports: [CategoriesTableComponent, AlertComponent],
  providers: [GetAllCategoriesUseCase]
})
export class CategoriesPage implements OnInit {
  categories: Category[] = [];
  state: State = 'init';

  private getAllCategoriesUseCase = inject(GetAllCategoriesUseCase);

  ngOnInit(): void {
    this.state = 'loading';
    this.getAllCategoriesUseCase.execute(10).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
