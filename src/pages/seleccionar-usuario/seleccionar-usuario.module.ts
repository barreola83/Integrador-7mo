import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionarUsuarioPage } from './seleccionar-usuario';

@NgModule({
  declarations: [
    SeleccionarUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionarUsuarioPage),
  ],
})
export class SeleccionarUsuarioPageModule {}
