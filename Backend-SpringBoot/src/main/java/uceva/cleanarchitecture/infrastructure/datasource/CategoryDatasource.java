package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Category;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class CategoryDatasource {

    private final Faker faker = new Faker();
    private final Random random = new Random();
    private final String[] stateValues = {
            "Activa",
            "Inactiva"
    };

    public List<Category> getAll(int countCategories) {
        List<Category> items = new ArrayList<>();
        for (int i = 1; i <= countCategories; i++) {
            items.add(generateCategory(i));
        }
        return items;
    }

    private Category generateCategory(Integer id) {
        return new Category(
                id,
                faker.commerce().department(),
                faker.lorem().sentence(),
                faker.number().numberBetween(1, 200),
                stateValues[random.nextInt(stateValues.length)]
        );
    }

}
