import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { ProductGalleryComponent } from './gallery.component';
import { GalleryImage } from '../../../../core/model';

describe('ProductGalleryComponent', () => {
  let component: ProductGalleryComponent;
  let fixture: ComponentFixture<ProductGalleryComponent>;

  const mockImages: GalleryImage[] = [{ id: 0, src: 'test.jpg', alt: 'Test', thumb: 'test.jpg' }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGalleryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('images', mockImages);
    fixture.componentRef.setInput('productName', 'Test Product');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
