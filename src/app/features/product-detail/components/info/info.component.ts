import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { Product, ProductInfoPrice } from '../../../../core/model';

@Component({
  selector: 'app-product-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  product = input.required<Product>();

  private _expanded = signal<boolean>(false);
  isExpanded = computed(() => this._expanded());

  toggleDescription(): void {
    this._expanded.update((v) => !v);
  }
}
