import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms' 
import { FullwidthRoutingModule } from './fullwidth-routing.module';
import { FullwidthComponent } from './fullwidth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/components/login/login.component';



@NgModule({
  declarations: [FullwidthComponent,LoginComponent],
  imports: [
    CommonModule,
    FullwidthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FullwidthModule { 
  constructor(){
    console.log('fullwidth')
  }
}
