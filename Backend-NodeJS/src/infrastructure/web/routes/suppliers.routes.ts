import { Router } from "express";
import { GetAllSuppliersUseCase } from "../../../application/usecases/get-all-suppliers.usecase";
import { SupplierDatasource } from "../../datasources/supplier.datasource";
import { SupplierRepositoryImpl } from "../../repositories/supplier.repository.impl";
import { SuppliersController } from "../controllers/suppliers.controller";

export class SuppliersRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new SupplierRepositoryImpl(new SupplierDatasource());
    const getAllSuppliers = new GetAllSuppliersUseCase(repository);
    const controller = new SuppliersController(getAllSuppliers);

    /**
     * @openapi
     * /api/suppliers/{countSuppliers}:
     *   get:
     *     summary: Obtener listado de proveedores
     *     description: Retorna una lista de proveedores generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Suppliers
     *     parameters:
     *       - in: path
     *         name: countSuppliers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           maximum: 100
     *           example: 10
     *         description: Cantidad de registros a generar
     *     responses:
     *       200:
     *         description: Lista de proveedores generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Supplier'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countSuppliers", controller.getAllSuppliers);

    return router;
  }
}
