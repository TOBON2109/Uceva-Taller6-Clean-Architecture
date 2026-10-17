import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../../domain/models/supplier.model';
import { SupplierRepository } from '../../../domain/repositories/supplier.repository';
import { DataService } from '../../services/data.service';

/**
 * Implementación que consume el backend de Spring Boot del repositorio de proveedores.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**.
 */
@Injectable()
export class SupplierSpringBootRepositoryImpl extends SupplierRepository {

  private dataService = inject(DataService);

  getAll(countSuppliers: number): Observable<Supplier[]> {
    return this.dataService.getAllSuppliersSpringBoot(countSuppliers);
  }

}
