import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControlModule } from './form-control/form-control.module';
import { InputModule } from './input/input.module';
import { LabelModule } from './label/label.module';
import { ButtonModule } from './button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormControlModule,
    LabelModule,
    InputModule,
    CheckboxModule,
    ButtonModule
  ],
  exports: [
    FormControlModule,
    LabelModule,
    InputModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class FormsComponentModule { }
