import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card.component';
import { Product } from '../../../core/model';
import { CartService } from '../../../core/services';
import { ActivatedRoute } from '@angular/router';
import { describe, it, beforeEach, expect, vi } from 'vitest';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    slug: 'test-product',
    brand: 'Test Brand',
    category: 'Test Category',
    image: 'test.jpg',
    images: ['test.jpg'],
    description: 'Test Description',
    details: 'Test Details',
    specifications: [],
    unitLabel: '1 unit',
    stock: 10,
    rating: 4,
    reviewsCount: 5,
    prices: [{ label: 'Price', value: 'S/ 10.00' }],
  };

  const cartServiceMock = {
    add: vi.fn(),
    openModal: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
      providers: [
        { provide: CartService, useValue: cartServiceMock },
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept product input', () => {
    expect(component.product()).toEqual(mockProduct);
  });

  it('should call CartService.add when addToCart is triggered', () => {
    component.addToCart();
    expect(cartServiceMock.add).toHaveBeenCalledWith(mockProduct);
    expect(cartServiceMock.openModal).toHaveBeenCalled();
  });
});
