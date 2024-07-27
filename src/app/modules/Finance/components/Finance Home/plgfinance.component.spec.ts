import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGFinanceComponent } from './plgfinance.component';

describe('PLGFinanceComponent', () => {
  let component: PLGFinanceComponent;
  let fixture: ComponentFixture<PLGFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGFinanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
