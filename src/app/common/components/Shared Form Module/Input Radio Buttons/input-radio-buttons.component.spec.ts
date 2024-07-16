import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadioButtonsComponent } from './input-radio-buttons.component';

describe('InputRadioButtonsComponent', () => {
  let component: InputRadioButtonsComponent;
  let fixture: ComponentFixture<InputRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputRadioButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
