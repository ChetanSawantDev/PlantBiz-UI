import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGAdminComponent } from './pl-gadmin.component';

describe('PLGAdminComponent', () => {
  let component: PLGAdminComponent;
  let fixture: ComponentFixture<PLGAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
