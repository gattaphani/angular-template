import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';




const routes: Routes = [
  {
    path:'',component:DefaultComponent,children:[
      {
      path:'',component:HomeComponent
      },
      {
        path:'posts',component:PostsComponent
        }
  ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
