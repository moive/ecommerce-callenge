export interface ProductPrice {
  label: string;
  value: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category?: string;
  brand?: string;
  badge?: string;
  unitLabel?: string;
  prices: ProductPrice[];
}
