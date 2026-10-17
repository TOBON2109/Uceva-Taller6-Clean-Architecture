package uceva.cleanarchitecture.domain.entity;

public class Supplier {
    public Integer id;
    public String company;
    public String email;
    public String phone;
    public String city;
    public String type;

    public Supplier(Integer id, String company, String email, String phone, String city, String type) {
        this.id = id;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.type = type;
    }
}
