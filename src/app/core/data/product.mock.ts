import { Product } from '../model';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    name: 'Panadol Antigripal 500 mg + 5 mg + 2 mg Tableta Recubierta',
    image: 'https://via.placeholder.com/300',

    category: 'TABLETAS',
    brand: 'GSK',
    badge: 'Te puede interesar',
    unitLabel: '50 sobres',

    description: 'Alivio de síntomas gripales',

    prices: [
      { label: 'Precio Inkafarma', value: 'S/ 15.90' },
      { label: 'Precio con tarjeta', value: 'S/ 12.90 (-19%)' },
      { label: 'Precio online', value: 'S/ 11.50 (-27%)' },
    ],
  },
  {
    id: '2',
    name: 'Paracetamol 500 mg Tabletas',
    image: 'https://via.placeholder.com/300',

    category: 'TABLETAS',
    brand: 'Genérico',
    badge: 'Oferta',
    unitLabel: '20 tabletas',

    description: 'Analgésico y antipirético',

    prices: [
      { label: 'Precio regular', value: 'S/ 5.50' },
      { label: 'Precio con tarjeta', value: 'S/ 4.80 (-12%)' },
    ],
  },
  {
    id: '3',
    name: 'Ibuprofeno 400 mg Cápsulas Blandas',
    image: 'https://via.placeholder.com/300',

    category: 'CÁPSULAS',
    brand: 'Advil',
    badge: 'Más vendido',
    unitLabel: '24 cápsulas',

    description: 'Antiinflamatorio y analgésico',

    prices: [
      { label: 'Precio regular', value: 'S/ 12.00' },
      { label: 'Precio online', value: 'S/ 9.90 (-17%)' },
    ],
  },
  {
    id: '4',
    name: 'Jarabe para la Tos Adultos 120 ml',
    image: 'https://via.placeholder.com/300',

    category: 'JARABE',
    brand: 'Vick',
    badge: 'Recomendado',
    unitLabel: '120 ml',

    description: 'Alivio de tos seca y productiva',

    prices: [
      { label: 'Precio regular', value: 'S/ 18.50' },
      { label: 'Precio con tarjeta', value: 'S/ 15.90 (-14%)' },
    ],
  },
  {
    id: '5',
    name: 'Vitamina C 1000 mg Efervescente',
    image: 'https://via.placeholder.com/300',

    category: 'SUPLEMENTOS',
    brand: 'Redoxon',
    badge: 'Refuerza defensas',
    unitLabel: '10 tabletas',

    description: 'Suplemento para el sistema inmune',

    prices: [
      { label: 'Precio regular', value: 'S/ 22.00' },
      { label: 'Precio online', value: 'S/ 18.90 (-14%)' },
    ],
  },
  {
    id: '6',
    name: 'Alcohol en Gel Antibacterial 250 ml',
    image: 'https://via.placeholder.com/300',

    category: 'HIGIENE',
    brand: 'Dettol',
    badge: 'Esencial',
    unitLabel: '250 ml',

    description: 'Eliminación de bacterias sin agua',

    prices: [
      { label: 'Precio regular', value: 'S/ 10.90' },
      { label: 'Precio con tarjeta', value: 'S/ 9.50 (-13%)' },
    ],
  },
];
