import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodspComponent } from './foodsp.component';

describe('FoodspComponent', () => {
  let component: FoodspComponent;
  let fixture: ComponentFixture<FoodspComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodspComponent]
    });
    fixture = TestBed.createComponent(FoodspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
