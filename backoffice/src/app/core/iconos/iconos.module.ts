import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaIconosComponent } from '@core/iconos/lista-iconos/lista-iconos.component';
import { FichaIconosComponent } from '@core/iconos/ficha-iconos/ficha-iconos.component';

const routers: Routes = [
    { path: '', component:ListaIconosComponent},
    { path: 'create', component:FichaIconosComponent},
    { path: 'edit/:id', component:FichaIconosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class IconosModule { }
