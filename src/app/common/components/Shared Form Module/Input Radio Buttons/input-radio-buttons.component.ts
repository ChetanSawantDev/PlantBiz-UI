import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-radio-buttons',
  templateUrl: './input-radio-buttons.component.html',
  styleUrl: './input-radio-buttons.component.scss'
})
export class GLInputRadioButtonsComponent {
  @Input({required:true}) public label !: string;
  @Input({required:true}) public fieldName !: string;
  @Input({required:true}) public inputId !:string;
  @Input() public width = '400px';
  @Input() public height = 'auto';
  @Input() appearance:'fill' | 'outline' = 'fill' ;
  @Input() public isRequired = false; 
  @Input() public isDisabled = false; 
  @Input() public value = "";
  

  @Output() public getValue : EventEmitter<string> = new EventEmitter<string>();
  public isTouched = false;
  public isInvalid = false;

  onValueChange() {
    this.getValue.emit(this.value);
  }
}
