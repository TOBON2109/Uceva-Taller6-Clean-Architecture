import { Router } from "express";
import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { CategoryDatasource } from "../../datasources/category.datasource";
import { CategoryRepositoryImpl } from "../../repositories/category.repository.impl";
import { CategoriesController } from "../controllers/categories.controller";

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new CategoryRepositoryImpl(new CategoryDatasource());
    const getAllCategories = new GetAllCategoriesUseCase(repository);
    const controller = new CategoriesController(getAllCategories);

    /**
     * @openapi
     * /api/categories/{countCategories}:
     *   get:
     *     summary: Obtener listado de categorías
     *     description: Retorna una lista de categorías generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: countCategories
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           maximum: 100
     *           example: 10
     *         description: Cantidad de registros a generar
     *     responses:
     *       200:
     *         description: Lista de categorías generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countCategories", controller.getAllCategories);

    return router;
  }
}
