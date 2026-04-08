import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../core/model';
import { CartService, ProductService } from '../../../core/services';
import { ProductCard } from '../../../shared/ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductListPage implements OnInit {
  private productService = inject(ProductService);
  private cart = inject(CartService);

  products = signal<Product[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.intializeProducts();
  }

  intializeProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products.set(res);
      this.loading.set(false);
    });
  }

  addProduct(product: Product) {
    this.cart.add(product);
  }
}
