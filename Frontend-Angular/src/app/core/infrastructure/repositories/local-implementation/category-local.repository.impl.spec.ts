import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CATEGORIES_MOCK } from '../../../../mocks/categories.mocks';
import { Category } from '../../../domain/models/category.model';
import { DataService } from '../../services/data.service';
import { CategoryLocalRepositoryImpl } from './category-local.repository.impl';

describe('CategoryLocalRepositoryImpl (Infrastructure)', () => {
  let repository: CategoryLocalRepositoryImpl;

  const countCategories = 5;
  const DataServiceMock = { getAllCategoriesLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryLocalRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(CategoryLocalRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllCategoriesLocal()', () => {
    const getAllSpy = DataServiceMock.getAllCategoriesLocal.mockReturnValue(of([]));
    repository.getAll(countCategories).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countCategories);
  });

  it('debe devolver el listado como Observable', (done) => {
    DataServiceMock.getAllCategoriesLocal.mockReturnValue(of(CATEGORIES_MOCK));
    repository.getAll(countCategories).subscribe((items: Category[]) => {
      expect(items).toEqual(CATEGORIES_MOCK);
      done();
    });
  });
});
