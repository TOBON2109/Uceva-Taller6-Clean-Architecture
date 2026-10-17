package uceva.cleanarchitecture.domain.entity;

public class Category {
    public Integer id;
    public String name;
    public String description;
    public Integer productsCount;
    public String state;

    public Category(Integer id, String name, String description, Integer productsCount, String state) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.productsCount = productsCount;
        this.state = state;
    }
}
