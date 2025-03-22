import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthGuard } from '@infrastructure/guard/guard.guard';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  { path: '', component:CoreComponent, children:[
      { path: '', component:HomeComponent}
    ], canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
