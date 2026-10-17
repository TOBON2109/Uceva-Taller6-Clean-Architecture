# Clean Architecture en Node.js

Backend con Express y TypeScript. Genera datos simulados con Faker y documenta la API con Swagger.

```
src
├── domain          models y repositories (contratos)
├── application     usecases
├── infrastructure
│   ├── datasources     Faker
│   ├── repositories    implementaciones
│   └── web             controllers, routes (composición global), config y erros
└── app.ts
```

La inyección de dependencias se hace en `web/routes/*.routes.ts` (datasource → repositorio → caso de uso → controlador) y `routes.ts` las agrupa para toda la aplicación.

## Ejecución

- `npm i`
- `npm run start` (puerto 3000)

## URLs

- Swagger: `http://localhost:3000/api/docs`
- `http://localhost:3000/api/categories/{count}`
- `http://localhost:3000/api/suppliers/{count}`
- `http://localhost:3000/api/orders/{count}`

`{count}` debe ser un entero entre 1 y 100; en otro caso responde 400.
