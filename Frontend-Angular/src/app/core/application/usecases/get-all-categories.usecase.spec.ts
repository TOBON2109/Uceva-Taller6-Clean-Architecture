import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { CATEGORIES_MOCK } from '../../../mocks/categories.mocks';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { GetAllCategoriesUseCase } from './get-all-categories.usecase';

describe('GetAllCategoriesUseCase', () => {
  let useCase: GetAllCategoriesUseCase;

  const countCategories = 5;
  const CategoryRepositoryMock: jest.Mocked<CategoryRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GetAllCategoriesUseCase,
        { provide: CategoryRepository, useValue: CategoryRepositoryMock }
      ]
    }).compileComponents();
    useCase = TestBed.inject(GetAllCategoriesUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllCategoriesUseCase);
  });

  it('debería delegar la llamada al repository', async () => {
    CategoryRepositoryMock.getAll.mockReturnValue(of(CATEGORIES_MOCK));
    const result = await firstValueFrom(useCase.execute(countCategories));
    expect(CategoryRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(CategoryRepositoryMock.getAll).toHaveBeenCalledWith(countCategories);
    expect(result).toEqual(CATEGORIES_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Falló la consulta';
    CategoryRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countCategories);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(CategoryRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(CategoryRepositoryMock.getAll).toHaveBeenCalledWith(countCategories);
  });

});
