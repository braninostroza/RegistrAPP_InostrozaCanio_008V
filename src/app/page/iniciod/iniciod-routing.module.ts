import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciodPage } from './iniciod.page';

const routes: Routes = [
  {
    path: '',
    component: IniciodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciodPageRoutingModule {}
