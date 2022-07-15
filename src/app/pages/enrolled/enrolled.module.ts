import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolledRoutingModule } from './enrolled-routing.module';
import { SidebarModule } from '@components/sidebar/sidebar.module';
import { EnrolledComponent } from './enrolled.component';

@NgModule({
  declarations: [EnrolledComponent],
  imports: [
    CommonModule,
    EnrolledRoutingModule,
    SidebarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EnrolledModule { }
