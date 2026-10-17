package uceva.cleanarchitecture.domain.repository;

import uceva.cleanarchitecture.domain.entity.Category;

import java.util.List;

public abstract class CategoryRepository {
    public abstract List<Category> getAll(int countCategories);
}
