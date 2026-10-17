# Clean Architecture en Spring Boot

Backend con Spring Boot y Gradle. Genera datos simulados con JavaFaker y documenta la API con Swagger (springdoc).

```
src/main/java/uceva/cleanarchitecture
├── domain          entity y repository (contratos)
├── application     usecase
├── infrastructure  datasource, repository y controller
└── config          AppConfig (inyección de dependencias) y CorsConfig
```

## Ejecución

Requiere Java 21. En esta carpeta: `.\gradlew bootRun` (Linux/Mac: `./gradlew bootRun`). Puerto 8080 con ruta base `/api`.

## URLs

- Swagger: `http://localhost:8080/api/docs`
- `http://localhost:8080/api/categories/{count}`
- `http://localhost:8080/api/suppliers/{count}`
- `http://localhost:8080/api/orders/{count}`

`{count}` debe ser un entero entre 1 y 100; en otro caso responde 400.
