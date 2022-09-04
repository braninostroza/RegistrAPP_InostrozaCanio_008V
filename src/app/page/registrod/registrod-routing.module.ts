import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrodPage } from './registrod.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrodPageRoutingModule {}
