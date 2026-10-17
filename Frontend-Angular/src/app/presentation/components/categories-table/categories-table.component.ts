import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Category, CategoryState } from '../../../core/domain/models/category.model';

/**
 * Tabla que muestra un listado de categorías.
 *
 * @remarks
 * Componente de presentación: recibe los datos por `@Input`
 * y no conoce casos de uso ni servicios.
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [BadgeAtom],
})
export class CategoriesTableComponent {
  @Input() categories: Category[] = [];

  stateMap: Record<CategoryState, BadgeType> = {
    'Activa': 'success',
    'Inactiva': 'secondary'
  };
}
