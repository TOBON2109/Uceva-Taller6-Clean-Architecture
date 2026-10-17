/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa un categoría del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - productsCount
 *         - state
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Electrónica
 *         description:
 *           type: string
 *           example: Equipos y accesorios
 *         productsCount:
 *           type: number
 *           example: 45
 *         state:
 *           type: string
 *           enum:
 *             - Activa
 *             - Inactiva
 *           example: Activa
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       description: Representa un proveedor del sistema
 *       required:
 *         - id
 *         - company
 *         - email
 *         - phone
 *         - city
 *         - type
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         company:
 *           type: string
 *           example: Distribuidora Tech
 *         email:
 *           type: string
 *           example: ventas@tech.com
 *         phone:
 *           type: string
 *           example: 3001234567
 *         city:
 *           type: string
 *           example: Tuluá
 *         type:
 *           type: string
 *           enum:
 *             - Nacional
 *             - Internacional
 *           example: Nacional
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa un pedido del sistema
 *       required:
 *         - id
 *         - customer
 *         - product
 *         - quantity
 *         - total
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customer:
 *           type: string
 *           example: Carlos Ramírez
 *         product:
 *           type: string
 *           example: Teclado mecánico
 *         quantity:
 *           type: number
 *           example: 3
 *         total:
 *           type: number
 *           example: 360.5
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Enviado
 *             - Entregado
 *             - Cancelado
 *           example: Pendiente
 */
export {};
