import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrodPageRoutingModule } from './registrod-routing.module';

import { RegistrodPage } from './registrod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrodPageRoutingModule
  ],
  declarations: [RegistrodPage]
})
export class RegistrodPageModule {}
