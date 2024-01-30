import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddComponent } from './foodd.component';

describe('FooddComponent', () => {
  let component: FooddComponent;
  let fixture: ComponentFixture<FooddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooddComponent]
    });
    fixture = TestBed.createComponent(FooddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
