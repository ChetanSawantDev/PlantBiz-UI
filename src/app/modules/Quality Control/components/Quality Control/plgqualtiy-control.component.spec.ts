import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGQualtiyControlComponent } from './plgqualtiy-control.component';

describe('PLGQualtiyControlComponent', () => {
  let component: PLGQualtiyControlComponent;
  let fixture: ComponentFixture<PLGQualtiyControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGQualtiyControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGQualtiyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
