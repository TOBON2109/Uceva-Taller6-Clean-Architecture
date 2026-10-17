package uceva.cleanarchitecture.application.usecase;

import uceva.cleanarchitecture.domain.entity.Category;
import uceva.cleanarchitecture.domain.repository.CategoryRepository;

import java.util.List;

public class GetAllCategoriesUseCase {

    private final CategoryRepository categoryRepository;

    public GetAllCategoriesUseCase(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> execute(int countCategories) {
        return categoryRepository.getAll(countCategories);
    }

}
