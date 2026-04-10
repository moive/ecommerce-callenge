import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService, CartService, AnalyticsService, SeoService } from '../../../core/services';
import { AccordionItem, GalleryImage, Product, ProductTab } from '../../../core/model';
import { ProductGalleryComponent } from '../components/gallery/gallery.component';
import { ProductInfoComponent } from '../components/info/info.component';
import { ProductTabsComponent } from '../components/tabs/tabs.component';
import { ProductAccordionComponent } from '../components/product-accordion/product-accordion.component';
import { CrossSellingComponent } from '../components/cross-selling/cross-selling.component';
import { LoadingComponent } from '../../../shared/ui/loading/loading.component';

@Component({
  selector: 'app-product-detail',
  imports: [
    ProductGalleryComponent,
    ProductInfoComponent,
    ProductTabsComponent,
    ProductAccordionComponent,
    CrossSellingComponent,
    LoadingComponent,
  ],
  templateUrl: './product-detail.page.html',
  styleUrl: './product-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cart = inject(CartService);

  product = signal<Product | null>(null);
  loading = signal(true);
  private _isWishlisted = signal<boolean>(false);
  isWishlisted = computed(() => this._isWishlisted());
  relatedProducts = signal<Product[]>([]);

  private _selectedTab = signal<ProductTab | undefined>(undefined);
  selectedTab = computed(() => this._selectedTab());

  readonly galleryImages = computed<GalleryImage[]>(() => {
    const p = this.product();
    if (!p) return [];

    const images = p.images?.length ? p.images : [p.image];

    return images.map((img, index) => ({
      id: index,
      src: img,
      alt: p.name,
      thumb: img,
    }));
  });

  readonly hasProduct = computed(() => !!this.product());

  private seo = inject(SeoService);
  analytics = inject(AnalyticsService);

  readonly tabs = computed<ProductTab[]>(() => {
    const p = this.product();
    return p?.tabs || [];
  });

  constructor() {
    effect(() => {
      const tabsArray = this.tabs();
      if (tabsArray.length > 0 && !this._selectedTab()) {
        this._selectedTab.set(tabsArray[0]);
      }
    });
  }

  accordionItems: AccordionItem[] = [
    {
      id: 'descripcion',
      title: 'Descripción larga',
      content: '<p>Este producto es distribuido por Inretail Pharma S.A. (Ley 32033)</p>',
    },
    {
      id: 'composicion',
      title: 'Composición',
      content: '<p>...</p>',
    },
    {
      id: 'contraindicaciones',
      title: 'Contraindicaciones',
      content: '<p>...</p>',
    },
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.loading.set(false);
      return;
    }

    this.productService.getProductById(id).subscribe((p) => {
      this.product.set(p || null);
      this.loading.set(false);
      if (p) {
        this.seo.setProductMeta(p);
        this.analytics.trackViewItem(p);
      }
    });

    this.loadProducts();
  }

  addToCart() {
    const p = this.product();
    const tab = this._selectedTab();

    if (!p) return;

    this.cart.add(p, tab);
  }
  onTabSelected(tab: ProductTab): void {
    this._selectedTab.set(tab);
  }
  toggleWishlist(): void {
    this._isWishlisted.update((v) => !v);
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.relatedProducts.set(products);
    });
  }
}
