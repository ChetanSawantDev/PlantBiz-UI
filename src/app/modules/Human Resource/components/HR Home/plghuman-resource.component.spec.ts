import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGHumanResourceComponent } from './plghuman-resource.component';

describe('PLGHumanResourceComponent', () => {
  let component: PLGHumanResourceComponent;
  let fixture: ComponentFixture<PLGHumanResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGHumanResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
