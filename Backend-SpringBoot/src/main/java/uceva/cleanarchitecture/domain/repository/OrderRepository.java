package uceva.cleanarchitecture.domain.repository;

import uceva.cleanarchitecture.domain.entity.Order;

import java.util.List;

public abstract class OrderRepository {
    public abstract List<Order> getAll(int countOrders);
}
