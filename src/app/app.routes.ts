import { Routes } from '@angular/router';
import { LoginComponent } from './back/pages/login/login.component';
import { BackComponent } from './layout/back/back.component';
import { BackHomeComponent } from './back/pages/back-home/back-home.component';
import { AuthGuard } from './guard/guard.guard';
import { ListaCategoriasComponent } from './back/pages/categorias/lista-categorias/lista-categorias.component';
import { FichaCategoriasComponent } from './back/pages/categorias/ficha-categorias/ficha-categorias.component';
import { BackListPersonajesComponent } from './back/pages/personajes/back-list-personajes/back-list-personajes.component';
import { BackFichaPersonajesComponent } from './back/pages/personajes/back-ficha-personajes/back-ficha-personajes.component';
import { BackListTiposComponent } from './back/pages/tipos/back-list-tipos/back-list-tipos.component';
import { BackFichaTiposComponent } from './back/pages/tipos/back-ficha-tipos/back-ficha-tipos.component';
import { BackListLinksComponent } from './back/pages/links/back-list-links/back-list-links.component';
import { BackFichaLinksComponent } from './back/pages/links/back-ficha-links/back-ficha-links.component';
import { BackLinkDescripcionComponent } from './back/pages/links/back-link-descripcion/back-link-descripcion.component';

export const routes: Routes = [
    { path: 'back/login', component: LoginComponent },
    {
        path: 'back',
        component: BackComponent,
        children: [
            { path: 'home', component: BackHomeComponent, canActivate: [AuthGuard] },
            { path: 'categorias', component: ListaCategoriasComponent, canActivate: [AuthGuard] },
            { path: 'categorias/:id', component: FichaCategoriasComponent, canActivate: [AuthGuard] },
            { path: 'personajes', component: BackListPersonajesComponent, canActivate: [AuthGuard] },
            { path: 'personajes/:id', component: BackFichaPersonajesComponent, canActivate: [AuthGuard] },
            { path: 'tipos', component: BackListTiposComponent, canActivate: [AuthGuard] },
            { path: 'tipos/:id', component: BackFichaTiposComponent, canActivate: [AuthGuard] },
            { path: 'links', component: BackListLinksComponent, canActivate: [AuthGuard] },
            { path: 'links/:id', component: BackFichaLinksComponent, canActivate: [AuthGuard] },
            { path: 'links/niveles/:id', component: BackLinkDescripcionComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
];
