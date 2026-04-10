import { Injectable } from '@angular/core';
import { Product } from '../model';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private push(data: any) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }

  trackViewItem(product: Product) {
    this.push({
      event: 'view_item',
      ecommerce: {
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            item_brand: product.brand,
            item_category: product.category,
            price: this.getMainPrice(product),
            item_variant: product.unitLabel,
          },
        ],
      },
    });
  }

  trackAddToCart(product: Product) {
    this.push({
      event: 'view_item',
      ecommerce: {
        currency: 'PEN',
        value: this.getMainPrice(product),
        items: [
          {
            item_id: product.id,
            item_name: product.name,
            item_brand: product.brand,
            item_category: product.category,
            item_variant: product.unitLabel,
            price: this.getMainPrice(product),
            index: 0,
          },
        ],
      },
    });
  }

  private getMainPrice(product: Product): number {
    const raw = product.prices?.[0]?.value || '0';
    return parseFloat(raw.replace(/[^\d.]/g, '')) || 0;
  }
}
