import { Supplier } from '../core/domain/models/supplier.model';

export const SUPPLIERS_MOCK: Supplier[] = [
  {
    id: 1,
    company: 'Distribuidora Tech',
    email: 'ventas@tech.com',
    phone: '3001234567',
    city: 'Tuluá',
    type: 'Nacional',
  },
  {
    id: 2,
    company: 'Suministros del Valle',
    email: 'contacto@valle.com',
    phone: '3109876543',
    city: 'Cali',
    type: 'Internacional',
  }
];
