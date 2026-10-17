package uceva.cleanarchitecture.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uceva.cleanarchitecture.application.usecase.GetAllCategoriesUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllSuppliersUseCase;
import uceva.cleanarchitecture.application.usecase.GetAllOrdersUseCase;
import uceva.cleanarchitecture.domain.repository.CategoryRepository;
import uceva.cleanarchitecture.domain.repository.SupplierRepository;
import uceva.cleanarchitecture.domain.repository.OrderRepository;
import uceva.cleanarchitecture.infrastructure.datasource.CategoryDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.SupplierDatasource;
import uceva.cleanarchitecture.infrastructure.datasource.OrderDatasource;
import uceva.cleanarchitecture.infrastructure.repository.CategoryRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.SupplierRepositoryImpl;
import uceva.cleanarchitecture.infrastructure.repository.OrderRepositoryImpl;

/**
 * Composición de dependencias de la aplicación.
 *
 * Cada módulo conecta: Datasource -> Repository (implementación) -> UseCase.
 * Spring inyecta los casos de uso en los controladores.
 */
@Configuration
public class AppConfig {

    @Bean
    CategoryDatasource categoryDatasource() {
        return new CategoryDatasource();
    }

    @Bean
    CategoryRepository categoryRepository(CategoryDatasource categoryDatasource) {
        return new CategoryRepositoryImpl(categoryDatasource);
    }

    @Bean
    GetAllCategoriesUseCase getAllCategoriesUseCase(CategoryRepository categoryRepository) {
        return new GetAllCategoriesUseCase(categoryRepository);
    }

    @Bean
    SupplierDatasource supplierDatasource() {
        return new SupplierDatasource();
    }

    @Bean
    SupplierRepository supplierRepository(SupplierDatasource supplierDatasource) {
        return new SupplierRepositoryImpl(supplierDatasource);
    }

    @Bean
    GetAllSuppliersUseCase getAllSuppliersUseCase(SupplierRepository supplierRepository) {
        return new GetAllSuppliersUseCase(supplierRepository);
    }

    @Bean
    OrderDatasource orderDatasource() {
        return new OrderDatasource();
    }

    @Bean
    OrderRepository orderRepository(OrderDatasource orderDatasource) {
        return new OrderRepositoryImpl(orderDatasource);
    }

    @Bean
    GetAllOrdersUseCase getAllOrdersUseCase(OrderRepository orderRepository) {
        return new GetAllOrdersUseCase(orderRepository);
    }
}
