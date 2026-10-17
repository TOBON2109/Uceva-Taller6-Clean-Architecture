import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Category, CategoryState } from '../../domain/models/category.model';
import { Supplier, SupplierType } from '../../domain/models/supplier.model';
import { Order, OrderStatus } from '../../domain/models/order.model';

/**
 * Servicio de acceso a datos.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**. Centraliza las tres fuentes
 * de datos: local (Faker en el navegador), backend Node.js y backend Spring Boot.
 * Solo lo usan las implementaciones de los repositorios.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  private httpClient = inject(HttpClient);
  private nodeUrl = environment.baseUrlNode + '/api';
  private springBootUrl = environment.baseUrlSpringBoot + '/api';

  getAllCategoriesLocal(countCategories: number): Observable<Category[]> {
    const stateValues: CategoryState[] = ['Activa', 'Inactiva'];
    const categories: Category[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push({
        id: i,
        name: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        productsCount: faker.number.int({ min: 1, max: 200 }),
        state: faker.helpers.arrayElement(stateValues),
      });
    }

    return of(categories);
  }

  getAllCategoriesNode(countCategories: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.nodeUrl + '/categories/' + countCategories);
  }

  getAllCategoriesSpringBoot(countCategories: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.springBootUrl + '/categories/' + countCategories);
  }

  getAllSuppliersLocal(countSuppliers: number): Observable<Supplier[]> {
    const typeValues: SupplierType[] = ['Nacional', 'Internacional'];
    const suppliers: Supplier[] = [];

    for (let i = 1; i <= countSuppliers; i++) {
      suppliers.push({
        id: i,
        company: faker.company.name(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        city: faker.location.city(),
        type: faker.helpers.arrayElement(typeValues),
      });
    }

    return of(suppliers);
  }

  getAllSuppliersNode(countSuppliers: number): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.nodeUrl + '/suppliers/' + countSuppliers);
  }

  getAllSuppliersSpringBoot(countSuppliers: number): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.springBootUrl + '/suppliers/' + countSuppliers);
  }

  getAllOrdersLocal(countOrders: number): Observable<Order[]> {
    const statusValues: OrderStatus[] = ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'];
    const orders: Order[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push({
        id: i,
        customer: faker.person.fullName(),
        product: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 20 }),
        total: Number(faker.commerce.price({ min: 10, max: 5000, dec: 2 })),
        status: faker.helpers.arrayElement(statusValues),
      });
    }

    return of(orders);
  }

  getAllOrdersNode(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.nodeUrl + '/orders/' + countOrders);
  }

  getAllOrdersSpringBoot(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.springBootUrl + '/orders/' + countOrders);
  }
}
