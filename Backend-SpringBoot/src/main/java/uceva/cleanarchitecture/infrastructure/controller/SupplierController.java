package uceva.cleanarchitecture.infrastructure.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import uceva.cleanarchitecture.application.usecase.GetAllSuppliersUseCase;
import uceva.cleanarchitecture.domain.entity.Supplier;

import java.util.List;

@RestController
@RequestMapping("/suppliers")
@Tag(name = "Suppliers", description = "Listado de proveedores")
public class SupplierController {

    private final GetAllSuppliersUseCase getAllSuppliersUseCase;

    public SupplierController(GetAllSuppliersUseCase getAllSuppliersUseCase) {
        this.getAllSuppliersUseCase = getAllSuppliersUseCase;
    }

    @GetMapping("/{countSuppliers}")
    @Operation(summary = "Obtener listado de proveedores")
    public List<Supplier> getAll(@PathVariable int countSuppliers) {
        if (countSuppliers < 1 || countSuppliers > 100) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La cantidad debe ser un entero entre 1 y 100");
        }
        return getAllSuppliersUseCase.execute(countSuppliers);
    }

}
