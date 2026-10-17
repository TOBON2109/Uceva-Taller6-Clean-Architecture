package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Order;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class OrderDatasource {

    private final Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] statusValues = {
            "Pendiente",
            "Enviado",
            "Entregado",
            "Cancelado"
    };

    public List<Order> getAll(int countOrders) {
        List<Order> items = new ArrayList<>();
        for (int i = 1; i <= countOrders; i++) {
            items.add(generateOrder(i));
        }
        return items;
    }

    private Order generateOrder(Integer id) {
        return new Order(
                id,
                faker.name().fullName(),
                faker.commerce().productName(),
                faker.number().numberBetween(1, 20),
                faker.number().randomDouble(2, 10, 5000),
                statusValues[random.nextInt(statusValues.length)]
        );
    }

}
