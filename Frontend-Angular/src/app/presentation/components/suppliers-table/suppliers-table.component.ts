import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Supplier, SupplierType } from '../../../core/domain/models/supplier.model';

/**
 * Tabla que muestra un listado de proveedores.
 *
 * @remarks
 * Componente de presentación: recibe los datos por `@Input`
 * y no conoce casos de uso ni servicios.
 */
@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  imports: [BadgeAtom],
})
export class SuppliersTableComponent {
  @Input() suppliers: Supplier[] = [];

  typeMap: Record<SupplierType, BadgeType> = {
    'Nacional': 'success',
    'Internacional': 'primary'
  };
}
