import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroePage } from './registroe.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroePageRoutingModule {}
