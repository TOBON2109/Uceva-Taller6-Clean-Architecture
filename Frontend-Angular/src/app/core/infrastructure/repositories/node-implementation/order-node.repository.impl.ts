import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../domain/models/order.model';
import { OrderRepository } from '../../../domain/repositories/order.repository';
import { DataService } from '../../services/data.service';

/**
 * Implementación que consume el backend de Node.js del repositorio de pedidos.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure**.
 */
@Injectable()
export class OrderNodeRepositoryImpl extends OrderRepository {

  private dataService = inject(DataService);

  getAll(countOrders: number): Observable<Order[]> {
    return this.dataService.getAllOrdersNode(countOrders);
  }

}
