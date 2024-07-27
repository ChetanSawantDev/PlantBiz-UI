import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGCrmComponent } from './plgcrm.component';

describe('PLGCrmComponent', () => {
  let component: PLGCrmComponent;
  let fixture: ComponentFixture<PLGCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGCrmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
