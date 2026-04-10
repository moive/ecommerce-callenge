import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { ProductAccordionComponent } from './product-accordion.component';
import { AccordionItem } from '../../../../core/model';

describe('ProductAccordionComponent', () => {
  let component: ProductAccordionComponent;
  let fixture: ComponentFixture<ProductAccordionComponent>;

  const mockItems: AccordionItem[] = [
    { id: 'item-1', title: 'Title 1', content: '<p>Content 1</p>' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAccordionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', mockItems);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
