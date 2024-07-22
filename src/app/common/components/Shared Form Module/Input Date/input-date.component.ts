import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss'
})
export class GLInputDateComponent {
  @Input() setDate:string = "";
  @Input() isRequired:boolean=false;
  @Input() isDisabled= false;
  @Input() width:string='180px';
  @Input({required:true}) label:string = "";
  @Output() getDate:EventEmitter<string> = new EventEmitter<string>();


  onDateChange(){
    this.getDate.emit(this.setDate);
  }
}
