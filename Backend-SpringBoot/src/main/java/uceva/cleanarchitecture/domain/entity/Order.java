package uceva.cleanarchitecture.domain.entity;

public class Order {
    public Integer id;
    public String customer;
    public String product;
    public Integer quantity;
    public Double total;
    public String status;

    public Order(Integer id, String customer, String product, Integer quantity, Double total, String status) {
        this.id = id;
        this.customer = customer;
        this.product = product;
        this.quantity = quantity;
        this.total = total;
        this.status = status;
    }
}
