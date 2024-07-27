import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGProductionComponent } from './plgproduction.component';

describe('PLGProductionComponent', () => {
  let component: PLGProductionComponent;
  let fixture: ComponentFixture<PLGProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGProductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
