import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioePage } from './inicioe.page';

const routes: Routes = [
  {
    path: '',
    component: InicioePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioePageRoutingModule {}
