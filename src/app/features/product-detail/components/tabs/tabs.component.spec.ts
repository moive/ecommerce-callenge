import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { ProductTabsComponent } from './tabs.component';
import { PRODUCTS_MOCK } from '../../../../core/data/product.mock';

describe('ProductTabsComponent', () => {
  let component: ProductTabsComponent;
  let fixture: ComponentFixture<ProductTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductTabsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tabs', PRODUCTS_MOCK[0].tabs ?? []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
