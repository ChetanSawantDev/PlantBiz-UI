import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLGLogisticsAndShippingComponent } from './plglogistics-and-shipping.component';

describe('PLGLogisticsAndShippingComponent', () => {
  let component: PLGLogisticsAndShippingComponent;
  let fixture: ComponentFixture<PLGLogisticsAndShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLGLogisticsAndShippingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PLGLogisticsAndShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
