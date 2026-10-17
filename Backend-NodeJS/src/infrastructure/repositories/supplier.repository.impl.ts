import { Supplier } from "../../domain/models/supplier.model";
import { SupplierRepository } from "../../domain/repositories/supplier.repository";
import { SupplierDatasource } from "../datasources/supplier.datasource";

/**
 * Implementación concreta del repositorio de proveedores.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como adaptador
 * entre el dominio y {@link SupplierDatasource}.
 */
export class SupplierRepositoryImpl extends SupplierRepository {

  constructor(private datasource: SupplierDatasource) {
    super();
  }

  getAll(countSuppliers: number): Promise<Supplier[]> {
    return this.datasource.getAll(countSuppliers);
  }
}
