import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente raíz de la aplicación.
 *
 * @remarks
 * Define el layout general y configura el navbar principal con los
 * tres módulos funcionales: categorías, proveedores y pedidos.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, NavbarOrganism],
})
export class App {

  /** Configuración del navbar principal. */
  navbarConfig: NavbarConfig = {
    title: 'Angular Client',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Categorías', url: '/categories' },
      { text: 'Proveedores', url: '/suppliers' },
      { text: 'Pedidos', url: '/orders' },
    ]
  };
}
