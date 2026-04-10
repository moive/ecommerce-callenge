import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem, Product, ProductTab } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items = signal<CartItem[]>([]);
  private _isOpen = signal<boolean>(false);

  items = this._items.asReadonly();
  isOpen = this._isOpen.asReadonly();

  totalItems = computed(() => this._items().reduce((acc, item) => acc + item.quantity, 0));

  totalPrice = computed(() =>
    this._items().reduce((acc, item) => {
      const price = this.getPriceForItem(item);
      return acc + price * item.quantity;
    }, 0),
  );

  openModal(): void {
    this._isOpen.set(true);
  }
  closeModal(): void {
    this._isOpen.set(false);
  }

  constructor() {
    this.loadFromStorage();
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this._items()));
    });
  }

  add(product: Product, selectedTab?: ProductTab) {
    const items = this._items();
    const tabId = selectedTab?.id;

    const existing = items.find((i) => i.product.id === product.id && i.selectedTab?.id === tabId);

    if (existing) {
      this._items.update((items) =>
        items.map((i) =>
          i.product.id === product.id && i.selectedTab?.id === tabId
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        ),
      );
    } else {
      this._items.update((items) => [...items, { product, quantity: 1, selectedTab }]);
    }
  }

  remove(productId: string, tabId?: string) {
    this._items.update((items) =>
      items.filter((i) => {
        if (tabId) {
          return !(i.product.id === productId && i.selectedTab?.id === tabId);
        }

        return !(i.product.id === productId && !i.selectedTab?.id);
      }),
    );
  }
  clear() {
    this._items.set([]);
  }

  private getPriceForItem(item: CartItem): number {
    const { product, selectedTab } = item;

    if (selectedTab?.priceLabel) {
      const match = selectedTab.priceLabel.match(/S\/\s*([\d.]+)/);
      if (match && match[1]) {
        return parseFloat(match[1]);
      }
    }

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
