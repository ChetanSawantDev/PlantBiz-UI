import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLinkCardComponent } from './module-link-card.component';

describe('ModuleLinkCardComponent', () => {
  let component: ModuleLinkCardComponent;
  let fixture: ComponentFixture<ModuleLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleLinkCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
