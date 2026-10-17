import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ORDERS_MOCK } from '../../../mocks/orders.mocks';
import { OrdersTableComponent } from './orders-table.component';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada elemento', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.orders.length);
  });

  it('debería mostrar los datos en cada columna', () => {
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const item = component.orders[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(item.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(String(item.customer));
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(item.product));
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(item.quantity));
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(item.total));
    });
  });

  it('debería mapear cada status a su BadgeType correcto', () => {
    expect(component.statusMap['Pendiente']).toBe('warning');
    expect(component.statusMap['Enviado']).toBe('primary');
    expect(component.statusMap['Entregado']).toBe('success');
    expect(component.statusMap['Cancelado']).toBe('danger');
  });

});
