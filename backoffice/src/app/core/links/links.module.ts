import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BackListLinksComponent } from './back-list-links/back-list-links.component';
import { BackFichaLinksComponent } from './back-ficha-links/back-ficha-links.component';

const routers:Route[] = [
  { path: '', component: BackListLinksComponent},
  { path: 'create', component: BackFichaLinksComponent},
  { path: 'edit/:id', component: BackFichaLinksComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class LinksModule { }
