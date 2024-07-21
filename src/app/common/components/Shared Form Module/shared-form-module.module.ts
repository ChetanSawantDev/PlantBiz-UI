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
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GLIconInputTextComponent } from './Icon Input Text/icon-input-text.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';


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
    GLInputRadioButtonsComponent,
    GLIconInputTextComponent
  ],

  imports: [
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    CheckboxModule
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
    GLInputRadioButtonsComponent,
    GLIconInputTextComponent
  ],
  
})
export class SharedFormModule { }
