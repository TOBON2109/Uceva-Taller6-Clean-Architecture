import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SUPPLIERS_MOCK } from '../../../mocks/suppliers.mocks';
import { SuppliersTableComponent } from './suppliers-table.component';

describe('SuppliersTableComponent', () => {
  let component: SuppliersTableComponent;
  let fixture: ComponentFixture<SuppliersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliersTableComponent);
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
    component.suppliers = SUPPLIERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.suppliers.length);
  });

  it('debería mostrar los datos en cada columna', () => {
    component.suppliers = SUPPLIERS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const item = component.suppliers[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(item.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(String(item.company));
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(item.email));
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(item.phone));
      expect(columns[4].nativeElement.textContent.trim()).toBe(String(item.city));
    });
  });

  it('debería mapear cada type a su BadgeType correcto', () => {
    expect(component.typeMap['Nacional']).toBe('success');
    expect(component.typeMap['Internacional']).toBe('primary');
  });

});
