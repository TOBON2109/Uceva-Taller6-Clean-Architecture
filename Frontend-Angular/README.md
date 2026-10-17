# Clean Architecture en Angular

Frontend con tres módulos funcionales (Categorías, Proveedores y Pedidos) que consumen un backend de Node.js o de Spring Boot.

```
src/app
├── core
│   ├── domain          models y repositories (contratos)
│   ├── application     usecases (get-all-categories / suppliers / orders)
│   └── infrastructure  services (data.service.ts) y repositories (local, node, springboot)
├── presentation        pages, components (alert y tablas) e interfaces
├── mocks
├── app.config.ts       Providers: selección de la implementación
├── app.routes.ts       Rutas de los tres módulos
└── app.ts              Navbar
```

Los componentes usan únicamente los casos de uso; nunca el `DataService` ni las APIs.

## Ejecución

- `npm i`
- `npm start` (abre `http://localhost:4200`)
- Requiere el backend activo según el bloque de Providers de `app.config.ts` (Node.js en el 3000 o Spring Boot en el 8080).

## Cambiar de backend

En `src/app/app.config.ts` deja activo un solo bloque de providers: **Local**, **Node** o **SpringBoot**.

## Pruebas y documentación

- `npm test`: Jest con reporte de cobertura (superior al 90%).
- `npm run compodoc`: genera la documentación técnica.
