import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SUPPLIERS_MOCK } from '../../../../mocks/suppliers.mocks';
import { Supplier } from '../../../domain/models/supplier.model';
import { DataService } from '../../services/data.service';
import { SupplierNodeRepositoryImpl } from './supplier-node.repository.impl';

describe('SupplierNodeRepositoryImpl (Infrastructure)', () => {
  let repository: SupplierNodeRepositoryImpl;

  const countSuppliers = 5;
  const DataServiceMock = { getAllSuppliersNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SupplierNodeRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(SupplierNodeRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllSuppliersNode()', () => {
    const getAllSpy = DataServiceMock.getAllSuppliersNode.mockReturnValue(of([]));
    repository.getAll(countSuppliers).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countSuppliers);
  });

  it('debe devolver el listado como Observable', (done) => {
    DataServiceMock.getAllSuppliersNode.mockReturnValue(of(SUPPLIERS_MOCK));
    repository.getAll(countSuppliers).subscribe((items: Supplier[]) => {
      expect(items).toEqual(SUPPLIERS_MOCK);
      done();
    });
  });
});
