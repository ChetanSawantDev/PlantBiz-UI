import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGRetailersComponent } from './plgretailers.component';

describe('PLGRetailersComponent', () => {
  let component: PLGRetailersComponent;
  let fixture: ComponentFixture<PLGRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGRetailersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
