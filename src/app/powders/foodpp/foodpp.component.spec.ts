import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodppComponent } from './foodpp.component';

describe('FoodppComponent', () => {
  let component: FoodppComponent;
  let fixture: ComponentFixture<FoodppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodppComponent]
    });
    fixture = TestBed.createComponent(FoodppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
