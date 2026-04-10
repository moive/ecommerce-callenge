import { Product } from '../model';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    slug: 'panadol-antigripal-tabletas',

    name: 'Panadol Antigripal 500 mg + 5 mg + 2 mg',
    brand: 'GSK',
    category: 'TABLETAS',

    image: 'https://via.placeholder.com/300',
    images: ['assets/images/promocion.jpg', 'assets/images/sobre.jpg', 'assets/images/caja.jpg'],

    badge: 'Te puede interesar',
    unitLabel: '50 sobres',

    description: 'Alivio de síntomas gripales',
    details:
      'Indicado para aliviar congestión nasal, fiebre, dolor de cabeza y malestar general asociado a la gripe.',

    specifications: [
      { label: 'Principio activo', value: 'Paracetamol + Fenilefrina + Clorfenamina' },
      { label: 'Dosis', value: '500 mg' },
      { label: 'Forma farmacéutica', value: 'Tabletas recubiertas' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 15.90' },
      { label: 'Precio promocional', value: 'S/ 12.90', discount: '-19%' },
      { label: 'Exclusivo con tarjeta', value: 'S/ 11.50', discount: '-27%' },
    ],

    stock: 25,
    rating: 4.5,
    reviewsCount: 120,
    tags: ['gripe', 'dolor', 'resfrío'],
  },

  {
    id: '2',
    slug: 'paracetamol-500mg',

    name: 'Paracetamol 500 mg Tabletas',
    brand: 'Genérico',
    category: 'TABLETAS',

    image: 'https://via.placeholder.com/300',
    images: ['https://via.placeholder.com/600?4', 'https://via.placeholder.com/600?5'],

    badge: 'Oferta',
    unitLabel: '20 tabletas',

    description: 'Analgésico y antipirético',
    details: 'Medicamento utilizado para aliviar el dolor leve a moderado y reducir la fiebre.',

    specifications: [
      { label: 'Principio activo', value: 'Paracetamol' },
      { label: 'Dosis', value: '500 mg' },
      { label: 'Forma', value: 'Tabletas' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 5.50' },
      { label: 'Precio con tarjeta', value: 'S/ 4.80 (-12%)' },
    ],

    stock: 100,
    rating: 4.2,
    reviewsCount: 80,
    tags: ['dolor', 'fiebre'],
  },

  {
    id: '3',
    slug: 'ibuprofeno-400mg-capsulas',

    name: 'Ibuprofeno 400 mg Cápsulas Blandas',
    brand: 'Advil',
    category: 'CÁPSULAS',

    image: 'https://via.placeholder.com/300',
    images: ['https://via.placeholder.com/600?6', 'https://via.placeholder.com/600?7'],

    badge: 'Más vendido',
    unitLabel: '24 cápsulas',

    description: 'Antiinflamatorio y analgésico',
    details: 'Indicado para reducir inflamación, dolor muscular, dental y fiebre.',

    specifications: [
      { label: 'Principio activo', value: 'Ibuprofeno' },
      { label: 'Dosis', value: '400 mg' },
      { label: 'Forma', value: 'Cápsulas blandas' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 12.00' },
      { label: 'Precio online', value: 'S/ 9.90 (-17%)' },
    ],

    stock: 60,
    rating: 4.6,
    reviewsCount: 200,
    tags: ['inflamación', 'dolor'],
  },

  {
    id: '4',
    slug: 'jarabe-tos-adultos',

    name: 'Jarabe para la Tos Adultos 120 ml',
    brand: 'Vick',
    category: 'JARABE',

    image: 'https://via.placeholder.com/300',
    images: ['https://via.placeholder.com/600?8', 'https://via.placeholder.com/600?9'],

    badge: 'Recomendado',
    unitLabel: '120 ml',

    description: 'Alivio de tos seca y productiva',
    details: 'Jarabe formulado para calmar la irritación de garganta y reducir la tos.',

    specifications: [
      { label: 'Uso', value: 'Tos seca y productiva' },
      { label: 'Contenido', value: '120 ml' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 18.50' },
      { label: 'Precio con tarjeta', value: 'S/ 15.90 (-14%)' },
    ],

    stock: 40,
    rating: 4.3,
    reviewsCount: 65,
    tags: ['tos', 'jarabe'],
  },

  {
    id: '5',
    slug: 'vitamina-c-1000mg',

    name: 'Vitamina C 1000 mg Efervescente',
    brand: 'Redoxon',
    category: 'SUPLEMENTOS',

    image: 'https://via.placeholder.com/300',
    images: ['https://via.placeholder.com/600?10', 'https://via.placeholder.com/600?11'],

    badge: 'Refuerza defensas',
    unitLabel: '10 tabletas',

    description: 'Suplemento para el sistema inmune',
    details: 'Ayuda a fortalecer el sistema inmunológico y prevenir resfriados.',

    specifications: [
      { label: 'Vitamina', value: 'Vitamina C' },
      { label: 'Dosis', value: '1000 mg' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 22.00' },
      { label: 'Precio online', value: 'S/ 18.90 (-14%)' },
    ],

    stock: 75,
    rating: 4.7,
    reviewsCount: 150,
    tags: ['vitaminas', 'defensas'],
  },

  {
    id: '6',
    slug: 'alcohol-gel-250ml',

    name: 'Alcohol en Gel Antibacterial 250 ml',
    brand: 'Dettol',
    category: 'HIGIENE',

    image: 'https://via.placeholder.com/300',
    images: ['https://via.placeholder.com/600?12'],

    badge: 'Esencial',
    unitLabel: '250 ml',

    description: 'Eliminación de bacterias sin agua',
    details: 'Gel antibacterial que elimina el 99.9% de bacterias sin necesidad de enjuague.',

    specifications: [
      { label: 'Contenido', value: '250 ml' },
      { label: 'Uso', value: 'Antibacterial' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 10.90' },
      { label: 'Precio con tarjeta', value: 'S/ 9.50 (-13%)' },
    ],

    stock: 150,
    rating: 4.4,
    reviewsCount: 90,
    tags: ['higiene', 'antibacterial'],
  },
];
