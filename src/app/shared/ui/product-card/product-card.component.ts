import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { Product } from '../../../core/model';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../../../core/services';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  product = input.required<Product>();

  private cartService = inject(CartService);
  private _isWishlisted = signal<boolean>(false);

  isWishlisted = computed(() => this._isWishlisted());

  addToCart(): void {
    this.cartService.add(this.product());
    this.cartService.openModal();
  }

  toggleWishlist(): void {
    this._isWishlisted.update((v) => !v);
  }
}
