import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciodPageRoutingModule } from './iniciod-routing.module';

import { IniciodPage } from './iniciod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciodPageRoutingModule
  ],
  declarations: [IniciodPage]
})
export class IniciodPageModule {}
