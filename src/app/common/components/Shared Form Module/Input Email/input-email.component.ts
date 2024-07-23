import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.scss'
})
export class GLInputEmailComponent {
  @Input({required:true}) public label !: string;
  @Input() public width = '400px';
  @Input() public margin = '2px';
  @Input() public height = 'auto';
  @Input() public wordCase : "UPPER" | "LOWER" | "CAMELCASE" | "NORMAL" |"PASCAL" | "KEBAB" | "CAMEL" | "SNAKE"= "NORMAL";
  @Input() appearance:'fill' | 'outline' = 'fill' ;
  @Input() public maxLength = 100;
  @Input() public isRequired = false; 
  @Input() public placeholder = this.label; 
  @Input() public isDisabled = false; 
  @Input() public setValue = "";

  
  @Output() public getValue : EventEmitter<string> = new EventEmitter<string>();
  public isTouched = false;
  public isInvalid = false;


  onValueChange() {
    this.getValue.emit(this.setValue);
  }
}
