import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'crearqr',
    loadChildren: () => import('./page/crearqr/crearqr.module').then( m => m.CrearqrPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./page/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'api',
    loadChildren: () => import('./page/api/api.module').then( m => m.ApiPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
