import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges} from '@angular/core';
import { WordCaseConstants } from '../../Data List/ConstantsLabels';

@Component({
  selector: 'app-gl-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GLInputTextComponent{
  //Styles Props
  @Input({required:true}) public label !: string;
  @Input() public width = '250px';
  @Input() public height = '70px';
  @Input() public wordCase : "UPPER" | "LOWER" | "CAMELCASE" | "NORMAL" = "NORMAL";
  @Input() appearance:'fill' | 'outline' = 'fill' ;
  @Input() public maxLength : number = 100;
  @Input() public isRequired : boolean = false; 
  @Input() public placeholder : string = this.label; 
  @Input() public isDisabled : boolean = false; 
  @Input() public setValue : string = "";


  @Output() public getValue : EventEmitter<string> = new EventEmitter<string>();

  onValueChange(){
    if(this.wordCase === WordCaseConstants.UPPER_CASE){
      this.setValue = this.setValue.toLocaleUpperCase();
    }

    if(this.wordCase === WordCaseConstants.LOWER_CASE){

    }
    if(this.wordCase === WordCaseConstants.CAMEL_CASE){

    }
    if(this.wordCase === WordCaseConstants.KEBAB_CASE){

    }
    if(this.wordCase === WordCaseConstants.PASCAL_CASE){

    }
    if(this.wordCase === WordCaseConstants.SNAKE_CASE){

    }

    this.getValue.emit(this.setValue);
    console.log(this.setValue);
  }

}
