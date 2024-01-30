import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklesComponent } from './pickles.component';

describe('PicklesComponent', () => {
  let component: PicklesComponent;
  let fixture: ComponentFixture<PicklesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicklesComponent]
    });
    fixture = TestBed.createComponent(PicklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
