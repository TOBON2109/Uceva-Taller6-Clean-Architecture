package uceva.cleanarchitecture.application.usecase;

import uceva.cleanarchitecture.domain.entity.Supplier;
import uceva.cleanarchitecture.domain.repository.SupplierRepository;

import java.util.List;

public class GetAllSuppliersUseCase {

    private final SupplierRepository supplierRepository;

    public GetAllSuppliersUseCase(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> execute(int countSuppliers) {
        return supplierRepository.getAll(countSuppliers);
    }

}
