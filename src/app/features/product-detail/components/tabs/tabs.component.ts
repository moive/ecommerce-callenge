import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { Product, ProductTab } from '../../../../core/model';

@Component({
  selector: 'app-product-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTabsComponent {
  tabs = input.required<ProductTab[]>();
  presentacion = input<string>('Presentación');

  // ─── Output ───────────────────────────────────────────────────────────────
  tabSelected = output<ProductTab>();

  // ─── State ────────────────────────────────────────────────────────────────
  private _selectedId = signal<string>('');

  selectedId = computed(() => this._selectedId() || this.tabs()[0]?.id || '');

  // ─── Acciones ─────────────────────────────────────────────────────────────
  selectTab(tab: ProductTab): void {
    this._selectedId.set(tab.id);
    this.tabSelected.emit(tab);
  }

  isSelected(id: string): boolean {
    return this.selectedId() === id;
  }
}
