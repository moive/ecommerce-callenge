import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../core/model';
import { BreadcrumbService, CartService, ProductService } from '../../../core/services';
import { ProductCard } from '../../../shared/ui/product-card/product-card.component';
import { LoadingComponent } from '../../../shared/ui/loading/loading.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, LoadingComponent],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductListPage implements OnInit {
  private productService = inject(ProductService);
  private cart = inject(CartService);
  private breadcrumb = inject(BreadcrumbService);

  products = signal<Product[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.loadBreadcrumb();
    this.intializeProducts();
  }
  ngOnDestroy() {
    this.breadcrumb.reset();
  }

  intializeProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products.set(res);
      this.loading.set(false);
    });
  }

  loadBreadcrumb() {
    this.breadcrumb.set([{ label: 'Inicio', url: '/' }, { label: 'Farmacia' }]);
  }

  addProduct(product: Product) {
    this.cart.add(product);
  }
}
