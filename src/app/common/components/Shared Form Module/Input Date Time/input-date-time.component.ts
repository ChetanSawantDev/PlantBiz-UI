import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-date-time',
  templateUrl: './input-date-time.component.html',
  styleUrl: './input-date-time.component.scss'
})
export class GLInputDateTimeComponent {
  @Input() setDateTime: Date|null = null;
  @Input() isRequired:boolean=false;
  @Input() isDisabled= false;
  @Input() width:string='230px';
  @Input() minDate?:Date;
  @Input() maxDate?:Date;
  @Input({required:true}) label:string = "";
  @Output() getDate:EventEmitter<Date | null> = new EventEmitter<Date|null>();

  onDateTimeChange(){
    this.getDate.emit(this.setDateTime);
  }
}
