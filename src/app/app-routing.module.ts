import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'crearqr',
    loadChildren: () => import('./page/crearqr/crearqr.module').then( m => m.CrearqrPageModule)
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./page/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./page/api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
