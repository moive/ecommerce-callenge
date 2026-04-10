import { Product } from '../model';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: '1',
    slug: 'panadol-antigripal-tabletas',
    name: 'Panadol Antigripal 500 mg + 5 mg + 2 mg',
    brand: 'GSK',
    category: 'FARMACIA',

    image: 'assets/images/huggies.png',
    images: ['assets/images/promocion.jpg', 'assets/images/sobre.jpg', 'assets/images/caja.jpg'],
    promotionImg: 'assets/images/2-mitad-precio.png',

    badge: 'Te puede interesar',
    unitLabel: '50 sobres',

    description: 'Alivio de síntomas gripales',
    details:
      'Indicado para aliviar congestión nasal, fiebre, dolor de cabeza y malestar general asociado a la gripe.',

    specifications: [
      {
        label: 'Principio activo',
        value: 'Paracetamol 500 mg + Fenilefrina 5 mg + Clorfenamina 2 mg',
      },
      { label: 'Forma farmacéutica', value: 'Sobres de polvo' },
      { label: 'Presentación', value: '50 sobres' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 15.90' },
      { label: 'Precio promocional', value: 'S/ 12.90', discount: '-19%' },
      { label: 'Exclusivo con tarjeta', value: 'S/ 11.50', discount: '-27%' },
    ],

    tabs: [
      {
        id: 'sobre',
        label: 'Sobre',
        image: 'assets/images/sobre.jpg',
        images: ['assets/images/sobre.jpg'],
        priceLabel: 'S/ 5.90',
        unitLabel: '1 sobre',
      },
      {
        id: 'caja',
        label: 'Caja',
        image: 'assets/images/caja.jpg',
        images: ['assets/images/promocion.jpg', 'assets/images/caja.jpg'],
        priceLabel: 'S/ 25.90',
        unitLabel: '50 sobres',
      },
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

    image: 'assets/images/huggies.png',
    images: ['https://via.placeholder.com/600?4', 'https://via.placeholder.com/600?5'],

    badge: 'Oferta',
    unitLabel: '20 tabletas',

    description: 'Analgésico y antipirético',
    details: 'Medicamento utilizado para aliviar el dolor leve a moderado y reducir la fiebre.',

    specifications: [
      { label: 'Principio activo', value: 'Paracetamol 500 mg' },
      { label: 'Forma', value: 'Tabletas recubiertas' },
      { label: 'Presentación', value: 'Caja' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 5.50' },
      { label: 'Precio con tarjeta', value: 'S/ 4.80', discount: '-12%' },
    ],

    tabs: [
      {
        id: 'blister-10',
        label: 'Blíster 10 Tabletas',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?4'],
        priceLabel: 'S/ 2.80',
        unitLabel: '10 tabletas',
      },
      {
        id: 'caja-20',
        label: 'Caja 20 Tabletas',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?4', 'https://via.placeholder.com/600?5'],
        priceLabel: 'S/ 5.50',
        unitLabel: '20 tabletas',
      },
    ],

    stock: 100,
    rating: 4.2,
    reviewsCount: 80,
    tags: ['dolor', 'fiebre', 'analgesico'],
  },

  {
    id: '3',
    slug: 'ibuprofeno-400mg-capsulas',
    name: 'Ibuprofeno 400 mg Cápsulas Blandas',
    brand: 'Advil',
    category: 'CAPSULAS',

    image: 'assets/images/huggies.png',
    images: ['https://via.placeholder.com/600?6', 'https://via.placeholder.com/600?7'],

    badge: 'Más vendido',
    unitLabel: '24 cápsulas',

    description: 'Antiinflamatorio y analgésico potente',
    details:
      'Indicado para reducir inflamación, dolor muscular, dental y fiebre con efecto duradero.',

    specifications: [
      { label: 'Principio activo', value: 'Ibuprofeno 400 mg' },
      { label: 'Forma', value: 'Cápsulas blandas' },
      { label: 'Efecto', value: 'Hasta 8 horas' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 12.00' },
      { label: 'Precio online', value: 'S/ 9.90', discount: '-17%' },
    ],

    tabs: [
      {
        id: 'mini',
        label: 'Mini Pack',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?6'],
        priceLabel: 'S/ 6.50',
        unitLabel: '10 cápsulas',
      },
      {
        id: 'regular',
        label: 'Pack Regular',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?6', 'https://via.placeholder.com/600?7'],
        priceLabel: 'S/ 12.00',
        unitLabel: '24 cápsulas',
      },
      {
        id: 'maxi',
        label: 'Pack Ahorro',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?7'],
        priceLabel: 'S/ 18.50',
        unitLabel: '48 cápsulas',
      },
    ],

    stock: 60,
    rating: 4.6,
    reviewsCount: 200,
    tags: ['inflamación', 'dolor', 'antiinflamatorio'],
  },

  {
    id: '4',
    slug: 'jarabe-tos-adultos',
    name: 'Jarabe para la Tos Adultos 120 ml',
    brand: 'Vick',
    category: 'JARABE',

    image: 'assets/images/huggies.png',
    images: ['https://via.placeholder.com/600?8', 'https://via.placeholder.com/600?9'],

    badge: 'Recomendado',
    unitLabel: '120 ml',

    description: 'Alivio de tos seca y productiva',
    details: 'Jarabe formulado para calmar la irritación de garganta y reducir la tos.',

    specifications: [
      { label: 'Uso', value: 'Tos seca y productiva' },
      { label: 'Contenido', value: '120 ml' },
      { label: 'Presentación', value: 'Frasco' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 18.50' },
      { label: 'Precio con tarjeta', value: 'S/ 15.90', discount: '-14%' },
    ],

    tabs: [
      {
        id: 'frasco-120',
        label: 'Frasco 120 ml',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?8'],
        priceLabel: 'S/ 18.50',
        unitLabel: '120 ml',
      },
      {
        id: 'frasco-300',
        label: 'Frasco 300 ml',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?8', 'https://via.placeholder.com/600?9'],
        priceLabel: 'S/ 32.90',
        unitLabel: '300 ml',
      },
    ],

    stock: 40,
    rating: 4.3,
    reviewsCount: 65,
    tags: ['tos', 'jarabe', 'garganta'],
  },

  {
    id: '5',
    slug: 'vitamina-c-1000mg',
    name: 'Vitamina C 1000 mg Efervescente',
    brand: 'Redoxon',
    category: 'SUPLEMENTOS',

    image: 'assets/images/huggies.png',
    images: ['https://via.placeholder.com/600?10', 'https://via.placeholder.com/600?11'],

    badge: 'Refuerza defensas',
    unitLabel: '10 tabletas',

    description: 'Suplemento para el sistema inmune',
    details: 'Ayuda a fortalecer el sistema inmunológico y prevenir resfriados.',

    specifications: [
      { label: 'Vitamina', value: 'Vitamina C 1000 mg' },
      { label: 'Presentación', value: 'Tabletas efervescentes' },
      { label: 'Dosis', value: '1 tableta/día' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 22.00' },
      { label: 'Precio online', value: 'S/ 18.90', discount: '-14%' },
    ],

    tabs: [
      {
        id: 'tubo-10',
        label: 'Tubo 10 Tabletas',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?10'],
        priceLabel: 'S/ 22.00',
        unitLabel: '10 tabletas',
      },
      {
        id: 'caja-30',
        label: 'Caja 30 Tabletas',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?10', 'https://via.placeholder.com/600?11'],
        priceLabel: 'S/ 55.00',
        unitLabel: '30 tabletas',
      },
    ],

    stock: 75,
    rating: 4.7,
    reviewsCount: 150,
    tags: ['vitaminas', 'defensas', 'inmunidad'],
  },

  {
    id: '6',
    slug: 'alcohol-gel-250ml',
    name: 'Alcohol en Gel Antibacterial 250 ml',
    brand: 'Dettol',
    category: 'HIGIENE',

    image: 'assets/images/huggies.png',
    images: ['https://via.placeholder.com/600?12'],

    badge: 'Esencial',
    unitLabel: '250 ml',

    description: 'Eliminación de bacterias sin agua',
    details: 'Gel antibacterial que elimina el 99.9% de bacterias sin necesidad de enjuague.',

    specifications: [
      { label: 'Contenido', value: '250 ml' },
      { label: 'Uso', value: 'Antibacterial' },
      { label: 'Presentación', value: 'Botella con dispensador' },
    ],

    prices: [
      { label: 'Precio regular', value: 'S/ 10.90' },
      { label: 'Precio con tarjeta', value: 'S/ 9.50', discount: '-13%' },
    ],

    tabs: [
      {
        id: 'botella-250',
        label: 'Botella 250 ml',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?12'],
        priceLabel: 'S/ 10.90',
        unitLabel: '250 ml',
      },
      {
        id: 'botella-500',
        label: 'Botella 500 ml',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?12'],
        priceLabel: 'S/ 18.90',
        unitLabel: '500 ml',
      },
      {
        id: 'pack-duo',
        label: 'Pack Dúo 250 ml',
        image: 'https://via.placeholder.com/300',
        images: ['https://via.placeholder.com/600?12'],
        priceLabel: 'S/ 18.50',
        unitLabel: '2 botellas x 250 ml',
      },
    ],

    stock: 150,
    rating: 4.4,
    reviewsCount: 90,
    tags: ['higiene', 'antibacterial', 'desinfectante'],
  },
];
