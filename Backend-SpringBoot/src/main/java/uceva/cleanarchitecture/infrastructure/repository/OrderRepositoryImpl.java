package uceva.cleanarchitecture.infrastructure.repository;

import uceva.cleanarchitecture.domain.entity.Order;
import uceva.cleanarchitecture.domain.repository.OrderRepository;
import uceva.cleanarchitecture.infrastructure.datasource.OrderDatasource;

import java.util.List;

public class OrderRepositoryImpl extends OrderRepository {

    private final OrderDatasource orderDatasource;

    public OrderRepositoryImpl(OrderDatasource orderDatasource) {
        this.orderDatasource = orderDatasource;
    }

    @Override
    public List<Order> getAll(int countOrders) {
        return orderDatasource.getAll(countOrders);
    }
}
