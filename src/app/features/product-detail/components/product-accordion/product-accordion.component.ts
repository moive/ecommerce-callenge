import { Component, input, signal } from '@angular/core';
import { AccordionItem } from '../../../../core/model';

@Component({
  selector: 'app-product-accordion',
  imports: [],
  templateUrl: './product-accordion.component.html',
  styleUrl: './product-accordion.component.scss',
})
export class ProductAccordionComponent {
  items = input.required<AccordionItem[]>();

  private _openId = signal<string | null>(null);

  toggle(id: string): void {
    this._openId.update((current) => (current === id ? null : id));
  }

  isOpen(id: string): boolean {
    return this._openId() === id;
  }
}
