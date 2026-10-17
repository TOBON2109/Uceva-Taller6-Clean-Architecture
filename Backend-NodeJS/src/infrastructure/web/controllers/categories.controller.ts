import { Request, Response } from "express";
import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { CustomError } from "../erros/custom.error";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP de categorías.
 *
 * @remarks
 * Adaptador HTTP entre Express y la capa de Application.
 */
export class CategoriesController {

  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  /**
   * Valida el parámetro `countCategories`, ejecuta el caso de uso y responde en JSON.
   */
  getAllCategories = (req: Request, res: Response): void => {
    const { countCategories } = req.params;
    const count = Number(countCategories);

    if (!Number.isInteger(count) || count < 1 || count > 100) {
      HandleError.error(CustomError.badRequest('La cantidad debe ser un entero entre 1 y 100'), res);
      return;
    }

    this.getAllCategoriesUseCase
      .execute(count)
      .then((items) => res.status(200).json(items))
      .catch((error) => HandleError.error(error, res));
  };
}
