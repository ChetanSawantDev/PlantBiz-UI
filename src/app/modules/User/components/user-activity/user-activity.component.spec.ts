import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGUserActivityComponent } from './user-activity.component';

describe('UserActivityComponent', () => {
  let component: PLGUserActivityComponent;
  let fixture: ComponentFixture<PLGUserActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGUserActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGUserActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
