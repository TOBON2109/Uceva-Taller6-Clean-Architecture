import { Router } from "express";
import { CategoriesRoutes } from "./categories.routes";
import { SuppliersRoutes } from "./suppliers.routes";
import { OrdersRoutes } from "./orders.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Es la **composición global** del backend: cada módulo conecta su
 * datasource, repositorio, caso de uso y controlador en su clase de rutas.
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   */
  static get routes(): Router {
    const router = Router();

    router.use("/api/categories", CategoriesRoutes.routes);
    router.use("/api/suppliers", SuppliersRoutes.routes);
    router.use("/api/orders", OrdersRoutes.routes);

    return router;
  }
}
