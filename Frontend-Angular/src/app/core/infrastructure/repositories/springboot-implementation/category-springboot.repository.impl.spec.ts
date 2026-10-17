import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CATEGORIES_MOCK } from '../../../../mocks/categories.mocks';
import { Category } from '../../../domain/models/category.model';
import { DataService } from '../../services/data.service';
import { CategorySpringBootRepositoryImpl } from './category-springboot.repository.impl';

describe('CategorySpringBootRepositoryImpl (Infrastructure)', () => {
  let repository: CategorySpringBootRepositoryImpl;

  const countCategories = 5;
  const DataServiceMock = { getAllCategoriesSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategorySpringBootRepositoryImpl,
        { provide: DataService, useValue: DataServiceMock }
      ]
    }).compileComponents();
    repository = TestBed.inject(CategorySpringBootRepositoryImpl);
  });

  it('debe crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debe delegar la llamada a DataService.getAllCategoriesSpringBoot()', () => {
    const getAllSpy = DataServiceMock.getAllCategoriesSpringBoot.mockReturnValue(of([]));
    repository.getAll(countCategories).subscribe();
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(getAllSpy).toHaveBeenCalledWith(countCategories);
  });

  it('debe devolver el listado como Observable', (done) => {
    DataServiceMock.getAllCategoriesSpringBoot.mockReturnValue(of(CATEGORIES_MOCK));
    repository.getAll(countCategories).subscribe((items: Category[]) => {
      expect(items).toEqual(CATEGORIES_MOCK);
      done();
    });
  });
});
