import { Routes } from '@angular/router';


export const routes: Routes = [
    // Core routes
    { path: '', loadChildren: () => import('@core/core.module').then(m => m.CoreModule) },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // Anonymous routes
    { path: 'login', loadChildren: () => import('@anonymous/anonymous.routing.module').then(m => m.AnonymousModule) },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
