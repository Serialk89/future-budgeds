import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabelComponent } from './input-label.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputLabelComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [InputLabelComponent]
})
export class InputLabelModule { }
