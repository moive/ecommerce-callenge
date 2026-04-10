import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../core/model';
import { AnalyticsService, SeoService, BreadcrumbService, CartService, ProductService } from '../../../core/services';
import { ProductCard } from '../../../shared/ui/product-card/product-card.component';
import { LoadingComponent } from '../../../shared/ui/loading/loading.component';
import { ErrorComponent } from '../../../shared/ui/error/error.component';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, LoadingComponent, ErrorComponent],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductListPage implements OnInit {
  private productService = inject(ProductService);
  private cart = inject(CartService);
  private breadcrumb = inject(BreadcrumbService);
  private seo = inject(SeoService);
  private analytics = inject(AnalyticsService);

  products = signal<Product[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadBreadcrumb();
    this.intializeProducts();
  }
  ngOnDestroy() {
    this.breadcrumb.reset();
  }

  intializeProducts() {
    this.productService.getProducts()
      .pipe(
        catchError((err) => {
          this.error.set('No se pudieron cargar los productos en este momento.');
          this.loading.set(false);
          return of([]);
        })
      )
      .subscribe((res) => {
        if (res.length > 0) {
          this.products.set(res);
          this.analytics.trackViewItemList(res, 'Catálogo Principal');
        }
        
        this.seo.setPageMeta(
          'Catálogo de Productos | Farmacia', 
          'Descubre nuestra amplia variedad de productos de farmacia con los mejores precios.'
        );
        
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
