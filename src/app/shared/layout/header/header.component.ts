import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    // Evitar scroll del body cuando el drawer está abierto
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
