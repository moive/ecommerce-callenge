import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  openCol: number | null = null;

  toggleCol(col: number): void {
    this.openCol = this.openCol === col ? null : col;
  }
}
