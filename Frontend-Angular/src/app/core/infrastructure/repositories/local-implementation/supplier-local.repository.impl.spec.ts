import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SUPPLIERS_MOCK } from '../../../../mocks/suppliers.mocks';
import { Supplier } from '../../../domain/models/supplier.model';
import { DataService } from '../../services/data.service';
import { SupplierLocalRepositoryImpl } from './supplier-local.repository.impl';

describe('SupplierLocalRepositoryImpl (Infrastructure)', () => {
  let repository: SupplierLocalRepositoryImpl;

  const countSuppliers = 5;
  const DataServiceMock = { getAllSuppliersLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SupplierLocalRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(SupplierLocalRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllSuppliersLocal()', () => {
    const getAllSpy = DataServiceMock.getAllSuppliersLocal.mockReturnValue(of([]));
    repository.getAll(countSuppliers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countSuppliers);
  });

  it('debe devolver el listado como Observable', (done) => {
    DataServiceMock.getAllSuppliersLocal.mockReturnValue(of(SUPPLIERS_MOCK));
    repository.getAll(countSuppliers).subscribe((items: Supplier[]) => {
      expect(items).toEqual(SUPPLIERS_MOCK);
      done();
    });
  });
});
