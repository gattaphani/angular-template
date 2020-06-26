import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms'  
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
