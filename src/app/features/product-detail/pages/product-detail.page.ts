import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService, CartService } from '../../../core/services';
import { GalleryImage, Product, ProductTab } from '../../../core/model';
import { ProductGalleryComponent } from '../components/gallery/gallery.component';
import { ProductInfoComponent } from '../components/info/info.component';
import { ProductTabsComponent } from '../components/tabs/tabs.component';

@Component({
  selector: 'app-product-detail',
  imports: [ProductGalleryComponent, ProductInfoComponent, ProductTabsComponent],
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

  // 👉 útil para template limpio
  readonly hasProduct = computed(() => !!this.product());

  tabs: ProductTab[] = [
    {
      id: 'sobre',
      label: 'Sobre',
      image: 'assets/images/sobre.jpg',
      priceLabel: 'Desde S/ 5.90',
    },
    {
      id: 'caja',
      label: 'Caja',
      image: 'assets/images/caja.jpg',
      priceLabel: 'Desde S/ 25.90',
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
    });
  }

  addToCart() {
    const p = this.product();

    if (!p) return;

    this.cart.add(p);
  }
  onTabSelected(tab: ProductTab): void {
    console.log('Tab seleccionado:', tab);
  }
  toggleWishlist(): void {
    this._isWishlisted.update((v) => !v);
  }
}
