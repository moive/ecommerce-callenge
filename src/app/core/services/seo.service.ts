import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  setProductMeta(product: any) {
    this.title.setTitle(product.name);

    this.meta.updateTag({
      name: 'description',
      content: product.description,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: product.name,
    });
  }
}
