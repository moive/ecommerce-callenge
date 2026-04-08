import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  product = input<Product>();

  add = output<Product>();
}
