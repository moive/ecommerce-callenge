import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  ViewChild,
} from '@angular/core';
import { Product } from '../../../../core/model';
import { ProductCard } from '../../../../shared/ui/product-card/product-card.component';

@Component({
  selector: 'app-cross-selling',
  imports: [ProductCard],
  templateUrl: './cross-selling.component.html',
  styleUrl: './cross-selling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CrossSellingComponent {
  products = input.required<Product[]>();
  title = input<string>('Lo más buscado');

  @ViewChild('crossSwiperDesktop') crossSwiperDesktop?: ElementRef;
  @ViewChild('crossSwiperMobile') crossSwiperMobile?: ElementRef;

  constructor() {
    afterNextRender(() => {
      const SwiperDesktop = this.crossSwiperDesktop?.nativeElement;
      if (!SwiperDesktop) return;

      Object.assign(SwiperDesktop, {
        slidesPerView: 2,
        spaceBetween: 12,
        breakpoints: {
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        },
      });

      SwiperDesktop.initialize();
    });
  }

  prev(): void {
    this.crossSwiperDesktop?.nativeElement?.swiper?.slidePrev();
  }

  next(): void {
    this.crossSwiperDesktop?.nativeElement?.swiper?.slideNext();
  }
}
