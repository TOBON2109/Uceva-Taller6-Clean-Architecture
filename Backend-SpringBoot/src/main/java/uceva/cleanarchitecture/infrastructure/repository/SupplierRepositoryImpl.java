package uceva.cleanarchitecture.infrastructure.repository;

import uceva.cleanarchitecture.domain.entity.Supplier;
import uceva.cleanarchitecture.domain.repository.SupplierRepository;
import uceva.cleanarchitecture.infrastructure.datasource.SupplierDatasource;

import java.util.List;

public class SupplierRepositoryImpl extends SupplierRepository {

    private final SupplierDatasource supplierDatasource;

    public SupplierRepositoryImpl(SupplierDatasource supplierDatasource) {
        this.supplierDatasource = supplierDatasource;
    }

    @Override
    public List<Supplier> getAll(int countSuppliers) {
        return supplierDatasource.getAll(countSuppliers);
    }
}
