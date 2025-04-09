import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FichaCategoriasComponent } from '@core/categorias/ficha-categorias/ficha-categorias.component';
import { ListaCategoriasComponent } from '@core/categorias/lista-categorias/lista-categorias.component';

const routers: Routes = [
    { path: '', component:ListaCategoriasComponent},
    { path: 'edit/:id', component:FichaCategoriasComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class CategoriasModule { }
