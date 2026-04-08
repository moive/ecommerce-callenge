import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem, Product } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items = signal<CartItem[]>([]);

  items = this._items.asReadonly();

  totalItems = computed(() => this._items().reduce((acc, item) => acc + item.quantity, 0));

  totalPrice = computed(() =>
    this._items().reduce((acc, item) => {
      const price = this.getMainPrice(item.product);
      return acc + price * item.quantity;
    }, 0),
  );

  constructor() {
    this.loadFromStorage();
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this._items()));
    });
  }

  add(product: Product) {
    const items = this._items();
    const existing = items.find((i) => i.product.id === product.id);
    if (existing) {
      this._items.update((items) =>
        items.map((i) => (i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)),
      );
    } else {
      this._items.update((items) => [...items, { product, quantity: 1 }]);
    }
  }

  remove(productId: string) {
    this._items.update((items) => items.filter((i) => i.product.id !== productId));
  }
  clear() {
    this._items.set([]);
  }

  private getMainPrice(product: Product): number {
    const value = product.prices[0].value || '0';
    return parseFloat(value.replace(/[^\d.]/g, '')) ?? 0;
  }

  private loadFromStorage() {
    const data = localStorage.getItem('cart');
    if (data) {
      this._items.set(JSON.parse(data));
    }
  }
}
