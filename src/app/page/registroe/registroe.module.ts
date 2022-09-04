import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroePageRoutingModule } from './registroe-routing.module';

import { RegistroePage } from './registroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroePageRoutingModule
  ],
  declarations: [RegistroePage]
})
export class RegistroePageModule {}
