import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from '../model';
import { describe, it, beforeEach, expect, afterEach, vi } from 'vitest';

describe('CartService', () => {
  let service: CartService;

  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    image: 'test.jpg',
    description: 'Test Description',
    prices: [{ label: 'Price', value: 'S/ 10.00' }],
  };

  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };
    (globalThis as any).localStorage = localStorageMock as any;

    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    service.add(mockProduct);
    expect(service.items().length).toBe(1);
    expect(service.items()[0].product.id).toBe('1');
    expect(service.items()[0].quantity).toBe(1);
  });

  it('should increase quantity when adding same product twice', () => {
    service.add(mockProduct);
    service.add(mockProduct);
    expect(service.items().length).toBe(1);
    expect(service.items()[0].quantity).toBe(2);
  });

  it('should remove product from cart', () => {
    service.add(mockProduct);
    service.remove('1');
    expect(service.items().length).toBe(0);
  });

  it('should clear all items from cart', () => {
    service.add(mockProduct);
    service.add({ ...mockProduct, id: '2' });
    service.clear();
    expect(service.items().length).toBe(0);
  });

  it('should calculate total items correctly', () => {
    service.add(mockProduct);
    service.add(mockProduct);
    service.add({ ...mockProduct, id: '2' });
    expect(service.totalItems()).toBe(3);
  });

  it('should calculate total price correctly', () => {
    service.add(mockProduct);
    service.add(mockProduct);
    expect(service.totalPrice()).toBe(20);
  });
});
