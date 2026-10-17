import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CATEGORIES_MOCK } from '../../../../mocks/categories.mocks';
import { Category } from '../../../domain/models/category.model';
import { DataService } from '../../services/data.service';
import { CategoryNodeRepositoryImpl } from './category-node.repository.impl';

describe('CategoryNodeRepositoryImpl (Infrastructure)', () => {
  let repository: CategoryNodeRepositoryImpl;

  const countCategories = 5;
  const DataServiceMock = { getAllCategoriesNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryNodeRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(CategoryNodeRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllCategoriesNode()', () => {
    const getAllSpy = DataServiceMock.getAllCategoriesNode.mockReturnValue(of([]));
    repository.getAll(countCategories).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countCategories);
  });

  it('debe devolver el listado como Observable', (done) => {
    DataServiceMock.getAllCategoriesNode.mockReturnValue(of(CATEGORIES_MOCK));
    repository.getAll(countCategories).subscribe((items: Category[]) => {
      expect(items).toEqual(CATEGORIES_MOCK);
      done();
    });
  });
});
