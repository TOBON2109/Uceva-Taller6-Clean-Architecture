package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Supplier;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class SupplierDatasource {

    private final Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] typeValues = {
            "Nacional",
            "Internacional"
    };

    public List<Supplier> getAll(int countSuppliers) {
        List<Supplier> items = new ArrayList<>();
        for (int i = 1; i <= countSuppliers; i++) {
            items.add(generateSupplier(i));
        }
        return items;
    }

    private Supplier generateSupplier(Integer id) {
        return new Supplier(
                id,
                faker.company().name(),
                faker.internet().emailAddress(),
                faker.phoneNumber().cellPhone(),
                faker.address().city(),
                typeValues[random.nextInt(typeValues.length)]
        );
    }

}
