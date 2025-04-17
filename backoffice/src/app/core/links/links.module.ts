import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BackListLinksComponent } from '@core/links/back-list-links/back-list-links.component';
import { BackFichaLinksComponent } from '@core/links/back-ficha-links/back-ficha-links.component';
import { BackLinkDescripcionComponent } from '@core/links/back-link-descripcion/back-link-descripcion.component';

const routers:Route[] = [
  { path: '', component: BackListLinksComponent},
  { path: 'create', component: BackFichaLinksComponent},
  { path: 'edit/:id', component: BackFichaLinksComponent},
  { path: 'detall/:id', component: BackLinkDescripcionComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class LinksModule { }
