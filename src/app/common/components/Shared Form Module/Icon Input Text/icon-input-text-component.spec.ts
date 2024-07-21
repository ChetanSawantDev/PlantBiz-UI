import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLIconInputTextComponent } from './icon-input-text.component';

describe('IconInputTextComponentComponent', () => {
  let component: GLIconInputTextComponent;
  let fixture: ComponentFixture<GLIconInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GLIconInputTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GLIconInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
