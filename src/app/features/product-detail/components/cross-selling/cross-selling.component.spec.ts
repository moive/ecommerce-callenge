import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossSellingComponent } from './cross-selling.component';

describe('CrossSellingComponent', () => {
  let component: CrossSellingComponent;
  let fixture: ComponentFixture<CrossSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossSellingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossSellingComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('products', []);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
