import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BackListPersonajesComponent } from './back-list-personajes/back-list-personajes.component';
import { BackFichaPersonajesComponent } from './back-ficha-personajes/back-ficha-personajes.component';

const routers:Route[] = [
  { path: '', component: BackListPersonajesComponent },
  { path: 'create', component: BackFichaPersonajesComponent },
  { path: 'edit/:id', component: BackFichaPersonajesComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class PersonajesModule { }
