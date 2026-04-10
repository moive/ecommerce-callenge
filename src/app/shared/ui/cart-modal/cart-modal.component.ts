import { Component, computed, input, output } from '@angular/core';
import { CartItem } from '../../../core/model';

export interface RemoveItemEvent {
  productId: string;
  tabId?: string;
}

@Component({
  selector: 'app-cart-modal',
  imports: [],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss',
})
export class CartModalComponent {
  items = input.required<CartItem[]>();
  isOpen = input.required<boolean>();
  storeName = input<string>('Inkafarma');

  closed = output<void>();
  itemRemoved = output<RemoveItemEvent>();
  goToCart = output<void>();
  buyNow = output<void>();

  totalItems = computed(() => this.items().reduce((acc, i) => acc + i.quantity, 0));

  subtotal = computed(() => {
    return this.items().reduce((acc, item) => {
      const price = this.getItemUnitPrice(item);
      return acc + price * item.quantity;
    }, 0);
  });

  formattedSubtotal = computed(() => `S/ ${this.subtotal().toFixed(2)}`);

  private getItemUnitPrice(item: CartItem): number {
    if (item.selectedTab?.priceLabel) {
      const match = item.selectedTab.priceLabel.match(/S\/\s*([\d.]+)/);
      if (match && match[1]) {
        return parseFloat(match[1]);
      }
    }

    const value = item.product.prices[0].value || '0';
    return parseFloat(value.replace(/[^\d.]/g, '')) ?? 0;
  }

  getItemTotalPrice(item: CartItem): string {
    const unitPrice = this.getItemUnitPrice(item);
    const totalPrice = unitPrice * item.quantity;
    return `S/ ${totalPrice.toFixed(2)}`;
  }

  close(): void {
    this.closed.emit();
  }

  removeItem(productId: string, tabId?: string): void {
    this.itemRemoved.emit({ productId, tabId });
  }

  onGoToCart(): void {
    this.goToCart.emit();
    this.close();
  }

  onBuyNow(): void {
    this.buyNow.emit();
    this.close();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('cart-modal__overlay')) {
      this.close();
    }
  }
}
