package uceva.cleanarchitecture.domain.repository;

import uceva.cleanarchitecture.domain.entity.Supplier;

import java.util.List;

public abstract class SupplierRepository {
    public abstract List<Supplier> getAll(int countSuppliers);
}
