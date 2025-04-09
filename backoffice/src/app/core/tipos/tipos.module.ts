import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BackListTiposComponent } from '@core/tipos/back-list-tipos/back-list-tipos.component';
import { BackFichaTiposComponent } from '@core/tipos/back-ficha-tipos/back-ficha-tipos.component';

const routers: Routes = [
    { path: '', component:BackListTiposComponent},
    { path: 'edit/:id', component:BackFichaTiposComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class TiposModule { }
