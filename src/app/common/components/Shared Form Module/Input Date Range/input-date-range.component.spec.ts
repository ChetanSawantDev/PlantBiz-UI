import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDateRangeComponent } from './input-date-range.component';

describe('InputDateRangeComponent', () => {
  let component: InputDateRangeComponent;
  let fixture: ComponentFixture<InputDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDateRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
