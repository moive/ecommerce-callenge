import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { CartModalComponent, RemoveItemEvent } from './shared/ui/cart-modal/cart-modal.component';
import { CartService } from './core/services/cart.service';
import { BreadcrumbComponent } from './shared/ui/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CartModalComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  router = inject(Router);
  cartService = inject(CartService);

  removeFromCart(event: RemoveItemEvent): void {
    this.cartService.remove(event.productId, event.tabId);
  }
  goToCart() {
    console.log('Ir al carrito');
    this.cartService.closeModal();
  }
  buyNow() {
    console.log('Comprar ahora');
    this.cartService.closeModal();
  }
}
