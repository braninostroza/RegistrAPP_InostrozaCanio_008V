import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioePageRoutingModule } from './inicioe-routing.module';

import { InicioePage } from './inicioe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioePageRoutingModule
  ],
  declarations: [InicioePage]
})
export class InicioePageModule {}
