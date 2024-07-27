import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGInventoryComponent } from './plginventory.component';

describe('PLGInventoryComponent', () => {
  let component: PLGInventoryComponent;
  let fixture: ComponentFixture<PLGInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
