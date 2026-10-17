import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

/**
 * @faker-js/faker se distribuye como módulo ESM y Jest no lo transforma.
 * Se simula de forma global para que los tests no dependan de datos aleatorios.
 */
jest.mock('@faker-js/faker', () => ({
  faker: {
    commerce: {
      department: jest.fn(() => 'Electrónica'),
      productDescription: jest.fn(() => 'Descripción de prueba'),
      productName: jest.fn(() => 'Producto Test'),
      price: jest.fn(() => '10.00'),
    },
    company: { name: jest.fn(() => 'Empresa Test') },
    internet: { email: jest.fn(() => 'test@mail.com') },
    phone: { number: jest.fn(() => '3001234567') },
    location: { city: jest.fn(() => 'Tuluá') },
    person: { fullName: jest.fn(() => 'Juan Pérez') },
    number: { int: jest.fn(() => 30) },
    helpers: { arrayElement: jest.fn((arr) => arr[0]) },
  },
}));
