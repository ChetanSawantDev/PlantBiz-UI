import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLInputTextComponent} from './Input Text FIeld/input-text.component'
import { GLInputDropdownComponent } from './Input Dropdown Field/input-dropdown.component';
import { InputPasswordComponent } from './Input Password/input-password.component';
import { InputEmailComponent } from './Input Email/input-email.component';
import { InputNumberComponent } from './Input Number/input-number.component';
import { InputDateComponent } from './Input Date/input-date.component';
import { InputDateRangeComponent } from './Input Date Range/input-date-range.component';
import { InputDateTimeComponent } from './Input Date Time/input-date-time.component';
import { InputTextAreaComponent } from './Input Text Area/input-text-area.component';
import { InputCheckBoxComponent } from './Input Checkbox/input-check-box.component';


@NgModule({
  declarations: [
    GLInputTextComponent,
    GLInputDropdownComponent,
    InputPasswordComponent,
    InputEmailComponent,
    InputNumberComponent,
    InputDateComponent,
    InputDateRangeComponent,
    InputDateTimeComponent,
    InputTextAreaComponent,
    InputCheckBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GLInputTextComponent,
    GLInputDropdownComponent
  ]
})
export class SharedFormModuleModule { }
