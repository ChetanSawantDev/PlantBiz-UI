import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gl-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GLInputTextComponent {
  //Styles Props
  @Input() public width = '';
  @Input() public wordCase : "UPPER" | "LOWER" | "CAMELCASE" = "CAMELCASE";
  @Input() public maxLength : number = 100;
  @Input() public minLength : number = 0;
  @Input() public isRequired : boolean = false; 
  @Input({required:true}) public label !: string;

}
