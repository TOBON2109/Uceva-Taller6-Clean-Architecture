import { Request, Response } from "express";
import { GetAllSuppliersUseCase } from "../../../application/usecases/get-all-suppliers.usecase";
import { CustomError } from "../erros/custom.error";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP de proveedores.
 *
 * @remarks
 * Adaptador HTTP entre Express y la capa de Application.
 */
export class SuppliersController {

  constructor(private getAllSuppliersUseCase: GetAllSuppliersUseCase) {}

  /**
   * Valida el parámetro `countSuppliers`, ejecuta el caso de uso y responde en JSON.
   */
  getAllSuppliers = (req: Request, res: Response): void => {
    const { countSuppliers } = req.params;
    const count = Number(countSuppliers);

    if (!Number.isInteger(count) || count < 1 || count > 100) {
      HandleError.error(CustomError.badRequest('La cantidad debe ser un entero entre 1 y 100'), res);
      return;
    }

    this.getAllSuppliersUseCase
      .execute(count)
      .then((items) => res.status(200).json(items))
      .catch((error) => HandleError.error(error, res));
  };
}
