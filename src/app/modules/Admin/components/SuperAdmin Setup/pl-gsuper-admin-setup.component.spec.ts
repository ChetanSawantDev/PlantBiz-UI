import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGSuperAdminSetupComponent } from './pl-gsuper-admin-setup.component';

describe('PLGSuperAdminSetupComponent', () => {
  let component: PLGSuperAdminSetupComponent;
  let fixture: ComponentFixture<PLGSuperAdminSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGSuperAdminSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGSuperAdminSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
