import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card.component';
import { Product } from '../../../core/model';
import { describe, it, beforeEach, expect, vi } from 'vitest';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    image: 'test.jpg',
    description: 'Test Description',
    prices: [{ label: 'Price', value: 'S/ 10.00' }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard],
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

  it('should emit add output when emitted', async () => {
    const emitSpy = vi.fn();
    component.add.subscribe(emitSpy);

    component.add.emit(mockProduct);
    expect(emitSpy).toHaveBeenCalledWith(mockProduct);
  });
});
