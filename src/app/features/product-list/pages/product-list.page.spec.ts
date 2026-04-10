import { ComponentFixture, TestBed } from '@angular/core/testing';
import ProductListPage from './product-list.page';
import { ProductService, CartService } from '../../../core/services';
import { of } from 'rxjs';
import { Product } from '../../../core/model';
import { describe, it, beforeEach, expect, vi } from 'vitest';

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;
  let productService: any;
  let cartService: any;

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      slug: 'product-1',
      brand: 'Brand 1',
      category: 'Category 1',
      image: 'test.jpg',
      images: ['test.jpg'],
      description: 'Test',
      details: 'Details 1',
      specifications: [],
      unitLabel: '1 unit',
      stock: 10,
      rating: 4,
      reviewsCount: 5,
      prices: [{ label: 'Price', value: 'S/ 10.00' }],
    },
    {
      id: '2',
      name: 'Product 2',
      slug: 'product-2',
      brand: 'Brand 2',
      category: 'Category 2',
      image: 'test2.jpg',
      images: ['test2.jpg'],
      description: 'Test 2',
      details: 'Details 2',
      specifications: [],
      unitLabel: '1 unit',
      stock: 20,
      rating: 4,
      reviewsCount: 10,
      prices: [{ label: 'Price', value: 'S/ 20.00' }],
    },
  ];

  beforeEach(async () => {
    const mockProductService = {
      getProducts: vi.fn(() => of(mockProducts)),
    };

    const mockCartService = {
      add: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ProductListPage],
      providers: [
        { provide: ProductService, useValue: mockProductService },
        { provide: CartService, useValue: mockCartService },
      ],
    }).compileComponents();

    productService = TestBed.inject(ProductService) as any;
    cartService = TestBed.inject(CartService) as any;

    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with loading = true', () => {
    expect(component.loading()).toBe(true);
  });

  it('should load products on init', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.products().length).toBe(2);
    expect(component.products()[0].id).toBe('1');
    expect(component.loading()).toBe(false);
  });

  it('should add product to cart', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    component.addProduct(mockProducts[0]);
    expect(cartService.add).toHaveBeenCalledWith(mockProducts[0]);
  });
});
