import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousComponent } from '@anonymous/anonymous.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component:AnonymousComponent, children:[
    { path: '', component:LoginComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnonymousModule { }
