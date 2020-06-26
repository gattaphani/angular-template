import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./layouts/fullwidth/fullwidth.module').then(m => m.FullwidthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
