import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowdersComponent } from './powders.component';

describe('PowdersComponent', () => {
  let component: PowdersComponent;
  let fixture: ComponentFixture<PowdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowdersComponent]
    });
    fixture = TestBed.createComponent(PowdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
