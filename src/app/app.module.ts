import { WelcomePage } from './../pages/welcome/welcome';

import { EditarUsuarioPage } from './../pages/editar-usuario/editar-usuario';
import { EditarProductoPage } from './../pages/editar-producto/editar-producto';
import { SeleccionarProductoPage } from './../pages/seleccionar-producto/seleccionar-producto';
import { SeleccionarUsuarioPage } from './../pages/seleccionar-usuario/seleccionar-usuario';
import { VentasPage } from './../pages/ventas/ventas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NegocioProvider } from '../providers/negocio/negocio';
import { HttpClientModule } from '@angular/common/http';
import { RegistroPage } from '../pages/registro/registro';
import { NuevaVentaPage } from '../pages/nueva-venta/nueva-venta';
import { NuevoUsuarioPage } from '../pages/nuevo-usuario/nuevo-usuario';
import { NuevoProductoPage } from '../pages/nuevo-producto/nuevo-producto';
import { EditarVentaPage } from '../pages/editar-venta/editar-venta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    VentasPage,
    NuevaVentaPage,
    SeleccionarUsuarioPage,
    NuevoUsuarioPage,
    SeleccionarProductoPage,
    NuevoProductoPage,
    EditarProductoPage,
    EditarUsuarioPage,
    EditarVentaPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    RegistroPage,
    VentasPage,
    NuevaVentaPage,
    SeleccionarUsuarioPage,
    NuevoUsuarioPage,
    SeleccionarProductoPage,
    NuevoProductoPage,
    EditarProductoPage,
    EditarUsuarioPage,
    EditarVentaPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NegocioProvider
  ]
})
export class AppModule {}
