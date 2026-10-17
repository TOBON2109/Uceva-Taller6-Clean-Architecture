import { Request, Response } from "express";
import { GetAllOrdersUseCase } from "../../../application/usecases/get-all-orders.usecase";
import { CustomError } from "../erros/custom.error";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP de pedidos.
 *
 * @remarks
 * Adaptador HTTP entre Express y la capa de Application.
 */
export class OrdersController {

  constructor(private getAllOrdersUseCase: GetAllOrdersUseCase) {}

  /**
   * Valida el parámetro `countOrders`, ejecuta el caso de uso y responde en JSON.
   */
  getAllOrders = (req: Request, res: Response): void => {
    const { countOrders } = req.params;
    const count = Number(countOrders);

    if (!Number.isInteger(count) || count < 1 || count > 100) {
      HandleError.error(CustomError.badRequest('La cantidad debe ser un entero entre 1 y 100'), res);
      return;
    }

    this.getAllOrdersUseCase
      .execute(count)
      .then((items) => res.status(200).json(items))
      .catch((error) => HandleError.error(error, res));
  };
}
