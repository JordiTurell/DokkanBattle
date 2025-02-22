import { Routes } from '@angular/router';
import { LoginComponent } from './back/pages/login/login.component';
import { BackComponent } from './layout/back/back.component';
import { BackHomeComponent } from './back/pages/back-home/back-home.component';
import { AuthGuard } from './guard/guard.guard';

export const routes: Routes = [
    { path: 'back/login', component: LoginComponent },
    {
        path: 'back',
        component: BackComponent,
        children: [
            { path: 'home', component: BackHomeComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
];
