import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionarProductoPage } from './seleccionar-producto';

@NgModule({
  declarations: [
    SeleccionarProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionarProductoPage),
  ],
})
export class SeleccionarProductoPageModule {}
