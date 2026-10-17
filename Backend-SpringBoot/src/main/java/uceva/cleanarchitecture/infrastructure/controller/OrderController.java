package uceva.cleanarchitecture.infrastructure.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import uceva.cleanarchitecture.application.usecase.GetAllOrdersUseCase;
import uceva.cleanarchitecture.domain.entity.Order;

import java.util.List;

@RestController
@RequestMapping("/orders")
@Tag(name = "Orders", description = "Listado de pedidos")
public class OrderController {

    private final GetAllOrdersUseCase getAllOrdersUseCase;

    public OrderController(GetAllOrdersUseCase getAllOrdersUseCase) {
        this.getAllOrdersUseCase = getAllOrdersUseCase;
    }

    @GetMapping("/{countOrders}")
    @Operation(summary = "Obtener listado de pedidos")
    public List<Order> getAll(@PathVariable int countOrders) {
        if (countOrders < 1 || countOrders > 100) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La cantidad debe ser un entero entre 1 y 100");
        }
        return getAllOrdersUseCase.execute(countOrders);
    }

}
