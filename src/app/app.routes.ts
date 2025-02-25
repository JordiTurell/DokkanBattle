import { Routes } from '@angular/router';
import { LoginComponent } from './back/pages/login/login.component';
import { BackComponent } from './layout/back/back.component';
import { BackHomeComponent } from './back/pages/back-home/back-home.component';
import { AuthGuard } from './guard/guard.guard';
import { ListaCategoriasComponent } from './back/pages/categorias/lista-categorias/lista-categorias.component';
import { FichaCategoriasComponent } from './back/pages/categorias/ficha-categorias/ficha-categorias.component';
import { BackListPersonajesComponent } from './back/pages/personajes/back-list-personajes/back-list-personajes.component';
import { BackFichaPersonajesComponent } from './back/pages/personajes/back-ficha-personajes/back-ficha-personajes.component';
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
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
];
