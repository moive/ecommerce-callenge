import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  signal,
  AfterViewInit,
  ElementRef,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { GalleryImage } from '../../../../core/model';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

  // 🔥 ESTA ES LA CLAVE
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductGalleryComponent implements AfterViewInit {
  images = input.required<GalleryImage[]>();
  productName = input.required<string>();

  @ViewChild('mainSwiper', { static: false }) mainSwiper?: ElementRef;
  @ViewChild('thumbsSwiper', { static: false }) thumbsSwiper?: ElementRef;
  @ViewChild('mobileSwiper', { static: false }) mobileSwiper?: ElementRef;

  readonly hasImages = computed(() => this.images()?.length > 0);

  ngAfterViewInit() {
    const main = this.mainSwiper?.nativeElement;
    const thumbs = this.thumbsSwiper?.nativeElement;

    if (!main || !thumbs) return;

    main.thumbs = {
      swiper: thumbs.swiper,
    };
  }
}
