import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '@core/core.component';
import { AuthGuard } from '@infrastructure/guard/guard.guard';
import { HomeComponent } from '@core/home/home.component';

const routes : Routes = [
  { path: '', component:CoreComponent, children:[
      { path: '', component:HomeComponent},
      { path: 'tipos', loadChildren: () => import('@core/tipos/tipos.module').then(m => m.TiposModule) },
      { path: 'categorias', loadChildren: () => import('@core/categorias/categorias.module').then(m => m.CategoriasModule) },
      { path: 'iconos', loadChildren: () => import('@core/iconos/iconos.module').then(m => m.IconosModule) },
      { path: 'links', loadChildren: () => import('@core/links/links.module').then(m => m.LinksModule) },
    ], canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
