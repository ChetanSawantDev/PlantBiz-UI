import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-date-range',
  templateUrl: './input-date-range.component.html',
  styleUrl: './input-date-range.component.scss'
})
export class GLInputDateRangeComponent {
  @Input() setDateRange: Date[] = [];
  @Input() isRequired:boolean=false;
  @Input() isDisabled= false;
  @Input() width:string='180px';
  @Input() minDate?:Date;
  @Input() maxDate?:Date;
  @Input({required:true}) label:string = "";
  @Output() getDate:EventEmitter<Date[]> = new EventEmitter<Date[]>();

  onDateChange(){
    this.getDate.emit(this.setDateRange);
  }

}
