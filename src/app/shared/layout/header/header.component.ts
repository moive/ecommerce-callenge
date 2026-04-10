import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;
  cartService = inject(CartService);

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
