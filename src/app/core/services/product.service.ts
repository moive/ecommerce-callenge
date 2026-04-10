import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { delay, of, throwError } from 'rxjs';
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
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      return throwError(() => new Error('El producto no existe o ya no está disponible.')).pipe(delay(500));
    }
    return of(product).pipe(delay(500));
  }
}
