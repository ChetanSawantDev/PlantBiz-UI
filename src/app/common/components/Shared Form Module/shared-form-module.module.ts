import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GLInputTextComponent} from './Input Text FIeld/input-text.component'
import { GLInputDropdownComponent } from './Input Dropdown Field/input-dropdown.component';
import { GLInputPasswordComponent } from './Input Password/input-password.component';
import { GLInputEmailComponent } from './Input Email/input-email.component';
import { GLInputNumberComponent } from './Input Number/input-number.component';
import { GLInputDateComponent } from './Input Date/input-date.component';
import { GLInputDateRangeComponent } from './Input Date Range/input-date-range.component';
import { GLInputDateTimeComponent } from './Input Date Time/input-date-time.component';
import { GLInputTextAreaComponent } from './Input Text Area/input-text-area.component';
import { GLInputCheckBoxComponent } from './Input Checkbox/input-check-box.component';
import { GLInputRadioButtonsComponent } from './Input Radio Buttons/input-radio-buttons.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GLInputTextComponent,
    GLInputDropdownComponent,
    GLInputPasswordComponent,
    GLInputEmailComponent,
    GLInputNumberComponent,
    GLInputDateComponent,
    GLInputDateRangeComponent,
    GLInputDateTimeComponent,
    GLInputTextAreaComponent,
    GLInputCheckBoxComponent,
    GLInputRadioButtonsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    GLInputTextComponent,
    GLInputDropdownComponent,
    GLInputPasswordComponent,
    GLInputEmailComponent,
    GLInputNumberComponent,
    GLInputDateComponent,
    GLInputDateRangeComponent,
    GLInputDateTimeComponent,
    GLInputTextAreaComponent,
    GLInputCheckBoxComponent,
    GLInputRadioButtonsComponent
  ],
  
})
export class SharedFormModule { }
