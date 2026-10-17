import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/repositories/supplier.repository';

/**
 * Caso de uso para obtener un listado de proveedores.
 *
 * @remarks
 * Forma parte de la **capa de Application** y depende únicamente del
 * contrato {@link SupplierRepository}.
 */
@Injectable()
export class GetAllSuppliersUseCase {

  private supplierRepository = inject(SupplierRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countSuppliers - Cantidad de registros a obtener
   */
  execute(countSuppliers: number): Observable<Supplier[]> {
    return this.supplierRepository.getAll(countSuppliers);
  }
}
