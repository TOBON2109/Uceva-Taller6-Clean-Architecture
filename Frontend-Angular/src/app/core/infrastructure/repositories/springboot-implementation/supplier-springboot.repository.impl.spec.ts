import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SUPPLIERS_MOCK } from '../../../../mocks/suppliers.mocks';
import { Supplier } from '../../../domain/models/supplier.model';
import { DataService } from '../../services/data.service';
import { SupplierSpringBootRepositoryImpl } from './supplier-springboot.repository.impl';

describe('SupplierSpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: SupplierSpringBootRepositoryImpl;

  const countSuppliers = 5;
  const DataServiceMock = { getAllSuppliersSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SupplierSpringBootRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(SupplierSpringBootRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllSuppliersSpringBoot()', () => {
    const getAllSpy = DataServiceMock.getAllSuppliersSpringBoot.mockReturnValue(of([]));
    repository.getAll(countSuppliers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countSuppliers);
  });

  it('debe devolver el listado como Observable', (done) => {
    DataServiceMock.getAllSuppliersSpringBoot.mockReturnValue(of(SUPPLIERS_MOCK));
    repository.getAll(countSuppliers).subscribe((items: Supplier[]) => {
      expect(items).toEqual(SUPPLIERS_MOCK);
      done();
    });
  });
});
