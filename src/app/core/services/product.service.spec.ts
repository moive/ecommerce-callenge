import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { describe, it, beforeEach, expect } from 'vitest';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all products', async () => {
    const result = await new Promise((resolve) => {
      service.getProducts().subscribe((products) => {
        resolve(products);
      });
    });
    expect(Array.isArray(result)).toBe(true);
    expect((result as any[]).length).toBeGreaterThan(0);
    expect((result as any[])[0].id).toBeDefined();
    expect((result as any[])[0].name).toBeDefined();
  });

  it('should return product by id', async () => {
    const result = await new Promise((resolve) => {
      service.getProductById('1').subscribe((product) => {
        resolve(product);
      });
    });
    expect(result).toBeDefined();
    expect((result as any).id).toBe('1');
  });

  it('should return undefined for non-existent product id', async () => {
    const result = await new Promise((resolve) => {
      service.getProductById('999').subscribe((product) => {
        resolve(product);
      });
    });
    expect(result).toBeUndefined();
  });
});
