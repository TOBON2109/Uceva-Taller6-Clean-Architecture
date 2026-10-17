package uceva.cleanarchitecture.infrastructure.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import uceva.cleanarchitecture.application.usecase.GetAllCategoriesUseCase;
import uceva.cleanarchitecture.domain.entity.Category;

import java.util.List;

@RestController
@RequestMapping("/categories")
@Tag(name = "Categories", description = "Listado de categorías")
public class CategoryController {

    private final GetAllCategoriesUseCase getAllCategoriesUseCase;

    public CategoryController(GetAllCategoriesUseCase getAllCategoriesUseCase) {
        this.getAllCategoriesUseCase = getAllCategoriesUseCase;
    }

    @GetMapping("/{countCategories}")
    @Operation(summary = "Obtener listado de categorías")
    public List<Category> getAll(@PathVariable int countCategories) {
        if (countCategories < 1 || countCategories > 100) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La cantidad debe ser un entero entre 1 y 100");
        }
        return getAllCategoriesUseCase.execute(countCategories);
    }

}
