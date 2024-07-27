import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGSalesComponent } from './plgsales.component';

describe('PLGSalesComponent', () => {
  let component: PLGSalesComponent;
  let fixture: ComponentFixture<PLGSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
