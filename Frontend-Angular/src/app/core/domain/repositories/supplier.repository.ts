import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';

/**
 * Contrato del repositorio de proveedores.
 *
 * @remarks
 * Forma parte de la **capa de Domain**. Las implementaciones (local, Node.js
 * y Spring Boot) viven en la capa de *Infrastructure*.
 */
export abstract class SupplierRepository {

  /**
   * Obtiene un listado de proveedores.
   *
   * @param countSuppliers - Cantidad de registros a obtener
   */
  abstract getAll(countSuppliers: number): Observable<Supplier[]>;
}
