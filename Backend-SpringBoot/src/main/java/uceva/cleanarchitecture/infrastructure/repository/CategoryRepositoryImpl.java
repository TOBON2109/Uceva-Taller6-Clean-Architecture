package uceva.cleanarchitecture.infrastructure.repository;

import uceva.cleanarchitecture.domain.entity.Category;
import uceva.cleanarchitecture.domain.repository.CategoryRepository;
import uceva.cleanarchitecture.infrastructure.datasource.CategoryDatasource;

import java.util.List;

public class CategoryRepositoryImpl extends CategoryRepository {

    private final CategoryDatasource categoryDatasource;

    public CategoryRepositoryImpl(CategoryDatasource categoryDatasource) {
        this.categoryDatasource = categoryDatasource;
    }

    @Override
    public List<Category> getAll(int countCategories) {
        return categoryDatasource.getAll(countCategories);
    }
}
