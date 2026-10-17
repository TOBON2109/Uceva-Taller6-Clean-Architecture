import { Supplier } from "../../domain/models/supplier.model";
import { SupplierRepository } from "../../domain/repositories/supplier.repository";

/**
 * Caso de uso para obtener un listado de proveedores.
 *
 * @remarks
 * Forma parte de la **capa de Application** y depende únicamente
 * del contrato {@link SupplierRepository}.
 */
export class GetAllSuppliersUseCase {

  /**
   * @param supplierRepository - Repositorio usado para acceder a la información
   */
  constructor(private supplierRepository: SupplierRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @param countSuppliers - Cantidad de registros a obtener
   * @returns Promesa que resuelve un arreglo de {@link Supplier}
   */
  execute(countSuppliers: number): Promise<Supplier[]> {
    return this.supplierRepository.getAll(countSuppliers);
  }
}
