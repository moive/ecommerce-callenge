import { Injectable, signal } from '@angular/core';
import { BreadcrumbItem } from '../model/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private _items = signal<BreadcrumbItem[]>([]);

  items = this._items.asReadonly();

  set(items: BreadcrumbItem[]) {
    this._items.set(items);
  }

  reset() {
    this._items.set([]);
  }
}
