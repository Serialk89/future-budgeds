import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { FormsModule } from '@angular/forms';
import { LabelModule } from '../label/label.module';

@NgModule({
  declarations: [FormControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    LabelModule
  ],
  exports: [FormControlComponent]
})
export class FormControlModule { }
