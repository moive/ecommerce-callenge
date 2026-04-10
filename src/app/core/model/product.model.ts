export interface ProductPrice {
  label: string;
  value: string;
  originalValue?: string;
  discount?: string;
  badges?: ProductBadgePrice[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedTab?: ProductTab;
}

export interface Product {
  id: string;
  name: string;
  slug: string;

  brand: string;
  category: string;

  image: string;
  images: string[];
  promotionImg?: string;

  badge?: string;
  unitLabel: string;

  description: string;
  details: string;

  specifications: {
    label: string;
    value: string;
  }[];

  prices: ProductPrice[];
  tabs?: ProductTab[];

  stock: number;
  rating: number;
  reviewsCount: number;

  tags?: string[];
}

export interface ProductBadgePrice {
  icon: string;
  alt: string;
}

export interface ProductInfoPrice {
  label: string;
  value: string;
  originalValue?: string;
  discount?: string;
  badges?: ProductBadgePrice[];
}

export interface ProductInfo {
  sku: string;
  unitLabel: string;
  name: string;
  prices: ProductInfoPrice[];
  description: string;
  descriptionCollapsed: boolean;
}
export interface ProductTab {
  id: string;
  label: string;
  image: string;
  images?: string[];
  priceLabel: string;
  unitLabel?: string;
}
