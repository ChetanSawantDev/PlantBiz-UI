import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import { WordCaseConstants } from '../../../Utils/ConstantsLabels';
import { TextFormatUtils as textFormat} from '../../../Utils/Formatting/TextFormat';

@Component({
  selector: 'app-icon-input-text-component',
  templateUrl: './icon-input-text-component.html',
  styleUrl: './icon-input-text-component.scss'
})
export class GLIconInputTextComponent {
  
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['setValue']) {
      if(this.isRequired){
        this.checkValidation();
      }
    }
  }

  onValueChange() {
    this.transformData();
    this.getValue.emit(this.setValue);
    if(this.isRequired){
      this.checkValidation();
    }
  }

  transformData(){
    if(this.wordCase === WordCaseConstants.UPPER_CASE){
      this.setValue = this.setValue.toLocaleUpperCase();
    }
    if(this.wordCase === WordCaseConstants.LOWER_CASE){
      this.setValue = textFormat.toLowerCase(this.setValue);
    }
    if(this.wordCase === WordCaseConstants.CAMEL_CASE){
      this.setValue = textFormat.toCamelCase(this.setValue);
    }
    if(this.wordCase === WordCaseConstants.KEBAB_CASE){
      this.setValue = textFormat.toKebabCase(this.setValue);
    }
    if(this.wordCase === WordCaseConstants.PASCAL_CASE){
      this.setValue = textFormat.toSnakeCase(this.setValue);
    }
    if(this.wordCase === WordCaseConstants.SNAKE_CASE){
      this.setValue = textFormat.toSnakeCase(this.setValue);
    }
  }

  checkValidation() {
    this.isTouched = true;
    this.isInvalid = this.setValue!== '' ? false : true;
  }
}
