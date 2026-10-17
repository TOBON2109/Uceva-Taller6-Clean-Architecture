import { Component, inject, OnInit } from '@angular/core';
import { GetAllSuppliersUseCase } from '../../../core/application/usecases/get-all-suppliers.usecase';
import { Supplier } from '../../../core/domain/models/supplier.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { SuppliersTableComponent } from '../../components/suppliers-table/suppliers-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Página de proveedores.
 *
 * @remarks
 * Forma parte de la capa de presentación. Usa únicamente el caso de uso
 * {@link GetAllSuppliersUseCase}, nunca servicios ni APIs directamente.
 */
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  imports: [SuppliersTableComponent, AlertComponent],
  providers: [GetAllSuppliersUseCase]
})
export class SuppliersPage implements OnInit {
  suppliers: Supplier[] = [];
  state: State = 'init';

  private getAllSuppliersUseCase = inject(GetAllSuppliersUseCase);

  ngOnInit(): void {
    this.state = 'loading';
    this.getAllSuppliersUseCase.execute(10).subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
