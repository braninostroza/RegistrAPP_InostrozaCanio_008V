import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
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
    path: 'inicioe',
    loadChildren: () => import('./page/inicioe/inicioe.module').then( m => m.InicioePageModule)
  },
  {
    path: 'iniciod',
    loadChildren: () => import('./page/iniciod/iniciod.module').then( m => m.IniciodPageModule)
  },
  {
    path: 'perfile',
    loadChildren: () => import('./page/perfile/perfile.module').then( m => m.PerfilePageModule)
  },
  {
    path: 'perfild',
    loadChildren: () => import('./page/perfild/perfild.module').then( m => m.PerfildPageModule)
  },
  {
    path: 'crearqr',
    loadChildren: () => import('./page/crearqr/crearqr.module').then( m => m.CrearqrPageModule)
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./page/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule)
  },  {
    path: 'registroe',
    loadChildren: () => import('./page/registroe/registroe.module').then( m => m.RegistroePageModule)
  },
  {
    path: 'registrod',
    loadChildren: () => import('./page/registrod/registrod.module').then( m => m.RegistrodPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
