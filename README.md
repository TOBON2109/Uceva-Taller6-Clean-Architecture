# 🧱 Taller 6: Clean Architecture (Angular, Node.js y Spring Boot)

- Taller de Arquitectura de Software (UCEVA).
- Un frontend Angular y dos backends (Node.js y Spring Boot) con los **mismos tres módulos** y el **mismo contrato de datos**. Angular cambia de backend desde los *Providers*, sin modificar casos de uso ni componentes.

## 📦 Proyectos y Puertos

| Carpeta | Tecnología | Puerto | Documentación |
| --- | --- | --- | --- |
| `Frontend-Angular` | Angular 20 + Jest | 4200 | Compodoc |
| `Backend-NodeJS` | Node.js + Express + TypeScript | 3000 | `http://localhost:3000/api/docs` |
| `Backend-SpringBoot` | Spring Boot + Gradle | 8080 | `http://localhost:8080/api/docs` |

## 🧩 Módulos funcionales

| Módulo | Endpoint (ambos backends) | Campos |
| --- | --- | --- |
| Categorías | `/api/categories/{count}` | id, name, description, productsCount, state |
| Proveedores | `/api/suppliers/{count}` | id, company, email, phone, city, type |
| Pedidos | `/api/orders/{count}` | id, customer, product, quantity, total, status |

`{count}` es la cantidad de registros a generar (entero entre 1 y 100). Los datos se generan con Faker en cada backend.

## 🏗️ Capas aplicadas

| Capa | Angular | Node.js | Spring Boot |
| --- | --- | --- | --- |
| Entidades | `core/domain/models` | `domain/models` | `domain/entity` |
| Contratos | `core/domain/repositories` | `domain/repositories` | `domain/repository` |
| Casos de uso | `core/application/usecases` | `application/usecases` | `application/usecase` |
| Implementaciones | `core/infrastructure/repositories` (local, node, springboot) | `infrastructure/repositories` y `datasources` | `infrastructure/repository` y `datasource` |
| Composición | `app.config.ts` (Providers) | `web/routes` | `config/AppConfig.java` |
| Entrega / UI | `presentation` | `web/controllers` | `infrastructure/controller` |

## 🚀 Ejecución

Requisitos: Node.js 20.19+ (o 22.12+), npm, Java 21 y Git.

1. **Node.js:** en `Backend-NodeJS` ejecutar `npm i` y `npm run start`.
2. **Spring Boot:** en `Backend-SpringBoot` ejecutar `.\gradlew bootRun` (Linux/Mac: `./gradlew bootRun`).
3. **Angular:** en `Frontend-Angular` ejecutar `npm i` y `npm start`, y abrir `http://localhost:4200`.

## 🔄 Cambiar de backend (Providers)

En `Frontend-Angular/src/app/app.config.ts` hay tres bloques de providers: **Local**, **Node** y **SpringBoot**. Solo uno debe estar activo (sin `//`). Por defecto está activo Node.js. Para usar Spring Boot se comenta el bloque Node y se descomenta el de SpringBoot; los casos de uso y los componentes no cambian. Las URL de los backends están en `Frontend-Angular/src/environments/environment.ts`.

## 🧪 Pruebas y documentación (Angular)

- Pruebas con cobertura: `npm test` (Jest, reporte en `coverage/`). Cobertura superior al 90%.
- Compodoc: `npm run compodoc` y luego `npx compodoc -s -d documentation`.

## 📝 Estándar de Commits

Formato `tipo(alcance): descripción` con los tipos `feat`, `fix`, `refactor`, `docs`, `test` y `chore`.
