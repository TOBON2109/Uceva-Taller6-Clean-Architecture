package uceva.cleanarchitecture.application.usecase;

import uceva.cleanarchitecture.domain.entity.Order;
import uceva.cleanarchitecture.domain.repository.OrderRepository;

import java.util.List;

public class GetAllOrdersUseCase {

    private final OrderRepository orderRepository;

    public GetAllOrdersUseCase(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> execute(int countOrders) {
        return orderRepository.getAll(countOrders);
    }

}
