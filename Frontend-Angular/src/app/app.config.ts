import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CategoryRepository } from './core/domain/repositories/category.repository';
import { SupplierRepository } from './core/domain/repositories/supplier.repository';
import { OrderRepository } from './core/domain/repositories/order.repository';
import { CategoryNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/category-node.repository.impl';
import { SupplierNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/supplier-node.repository.impl';
import { OrderNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/order-node.repository.impl';
import { CategorySpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/category-springboot.repository.impl';
import { SupplierSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/supplier-springboot.repository.impl';
import { OrderSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/order-springboot.repository.impl';
import { CategoryLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/category-local.repository.impl';
import { SupplierLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/supplier-local.repository.impl';
import { OrderLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/order-local.repository.impl';

/**
 * Configuración global de la aplicación.
 *
 * @remarks
 * Aquí se selecciona la implementación de los repositorios.
 * Para cambiar de backend solo se comenta un bloque de providers
 * y se descomenta otro: los casos de uso y los componentes no cambian.
 */
export const appConfig: ApplicationConfig = {

  providers: [

    //Local Providers
    //{ provide: CategoryRepository, useClass: CategoryLocalRepositoryImpl },
    //{ provide: SupplierRepository, useClass: SupplierLocalRepositoryImpl },
    //{ provide: OrderRepository, useClass: OrderLocalRepositoryImpl },

    //Node Providers
    { provide: CategoryRepository, useClass: CategoryNodeRepositoryImpl },
    { provide: SupplierRepository, useClass: SupplierNodeRepositoryImpl },
    { provide: OrderRepository, useClass: OrderNodeRepositoryImpl },

    //SpringBoot Providers
    //{ provide: CategoryRepository, useClass: CategorySpringBootRepositoryImpl },
    //{ provide: SupplierRepository, useClass: SupplierSpringBootRepositoryImpl },
    //{ provide: OrderRepository, useClass: OrderSpringBootRepositoryImpl },

    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideHttpClient(),
  ]
};
