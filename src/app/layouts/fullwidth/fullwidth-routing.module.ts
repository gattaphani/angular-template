import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FullwidthComponent } from './fullwidth.component';


const routes: Routes = [
  {
    path:'',component:FullwidthComponent,children:[
      {
      path:'',component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullwidthRoutingModule { }
