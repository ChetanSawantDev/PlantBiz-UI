import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-input-check-box',
  templateUrl: './input-check-box.component.html',
  styleUrl: './input-check-box.component.scss'
})
export class GLInputCheckBoxComponent {
  @Input({required:true}) public fieldLabel !: string;
  @Input() public setValue = false;
  @Input() public isDisabled = false;
  @Output() public getValue:EventEmitter<boolean> = new EventEmitter<boolean>();

  onValueChange(){
    this.getValue.emit(this.setValue);
  }
}
