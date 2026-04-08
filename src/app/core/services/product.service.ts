import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { delay, of } from 'rxjs';
import { PRODUCTS_MOCK } from '../data/product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = PRODUCTS_MOCK;

  getProducts() {
    return of(this.products).pipe(delay(500));
  }

  getProductById(id: string) {
    return of(this.products.find((p) => p.id === id)).pipe(delay(500));
  }
}
