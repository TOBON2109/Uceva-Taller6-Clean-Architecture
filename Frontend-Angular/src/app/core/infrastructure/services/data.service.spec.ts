import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';
import { CATEGORIES_MOCK } from '../../../mocks/categories.mocks';
import { Category } from '../../domain/models/category.model';
import { SUPPLIERS_MOCK } from '../../../mocks/suppliers.mocks';
import { Supplier } from '../../domain/models/supplier.model';
import { ORDERS_MOCK } from '../../../mocks/orders.mocks';
import { Order } from '../../domain/models/order.model';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  const count = 5;
  const pathUrlNode = environment.baseUrlNode + '/api';
  const pathUrlSpringBoot = environment.baseUrlSpringBoot + '/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe devolver el listado de categorías local', (done) => {
    service.getAllCategoriesLocal(count).subscribe((items: Category[]) => {
      expect(items.length).toEqual(count);
      expect(items[0].id).toBe(1);
      done();
    });
  });

  it('debe obtener categorías desde Node por HTTP', () => {
    service.getAllCategoriesNode(count).subscribe((items) => {
      expect(items).toEqual(CATEGORIES_MOCK);
    });
    const req = httpMock.expectOne(pathUrlNode + '/categories/' + count);
    expect(req.request.method).toBe('GET');
    req.flush(CATEGORIES_MOCK);
  });

  it('debe obtener categorías desde SpringBoot por HTTP', () => {
    service.getAllCategoriesSpringBoot(count).subscribe((items) => {
      expect(items).toEqual(CATEGORIES_MOCK);
    });
    const req = httpMock.expectOne(pathUrlSpringBoot + '/categories/' + count);
    expect(req.request.method).toBe('GET');
    req.flush(CATEGORIES_MOCK);
  });

  it('debe devolver el listado de proveedores local', (done) => {
    service.getAllSuppliersLocal(count).subscribe((items: Supplier[]) => {
      expect(items.length).toEqual(count);
      expect(items[0].id).toBe(1);
      done();
    });
  });

  it('debe obtener proveedores desde Node por HTTP', () => {
    service.getAllSuppliersNode(count).subscribe((items) => {
      expect(items).toEqual(SUPPLIERS_MOCK);
    });
    const req = httpMock.expectOne(pathUrlNode + '/suppliers/' + count);
    expect(req.request.method).toBe('GET');
    req.flush(SUPPLIERS_MOCK);
  });

  it('debe obtener proveedores desde SpringBoot por HTTP', () => {
    service.getAllSuppliersSpringBoot(count).subscribe((items) => {
      expect(items).toEqual(SUPPLIERS_MOCK);
    });
    const req = httpMock.expectOne(pathUrlSpringBoot + '/suppliers/' + count);
    expect(req.request.method).toBe('GET');
    req.flush(SUPPLIERS_MOCK);
  });

  it('debe devolver el listado de pedidos local', (done) => {
    service.getAllOrdersLocal(count).subscribe((items: Order[]) => {
      expect(items.length).toEqual(count);
      expect(items[0].id).toBe(1);
      done();
    });
  });

  it('debe obtener pedidos desde Node por HTTP', () => {
    service.getAllOrdersNode(count).subscribe((items) => {
      expect(items).toEqual(ORDERS_MOCK);
    });
    const req = httpMock.expectOne(pathUrlNode + '/orders/' + count);
    expect(req.request.method).toBe('GET');
    req.flush(ORDERS_MOCK);
  });

  it('debe obtener pedidos desde SpringBoot por HTTP', () => {
    service.getAllOrdersSpringBoot(count).subscribe((items) => {
      expect(items).toEqual(ORDERS_MOCK);
    });
    const req = httpMock.expectOne(pathUrlSpringBoot + '/orders/' + count);
    expect(req.request.method).toBe('GET');
    req.flush(ORDERS_MOCK);
  });
});
