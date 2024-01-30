import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdComponent } from './searchd.component';

describe('SearchdComponent', () => {
  let component: SearchdComponent;
  let fixture: ComponentFixture<SearchdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchdComponent]
    });
    fixture = TestBed.createComponent(SearchdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
