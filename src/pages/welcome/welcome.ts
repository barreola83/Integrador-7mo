import { VentasPage } from './../ventas/ventas';
import { NegocioProvider } from './../../providers/negocio/negocio';
import { HomePage } from './../home/home';
import { RegistroPage } from './../registro/registro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  mensaje:any;
  public v = {
    usuario: "",
    contrasena: ""
  };
  public vendedor=[];
  public recordar:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider) {
    if(localStorage.getItem("usuario")!=null && localStorage.getItem("contrasena")!=null){
      //console.log("Usuario encontrado")
      this.v.usuario=localStorage.getItem("usuario");
      this.v.contrasena=localStorage.getItem("contrasena");
      this.recordar=true;
      this.autoLogin();
    }else{
      //console.log("Usuario no encontrado")
      this.v.usuario="";
      this.v.contrasena="";
      this.recordar=false;
    }
  }

  autoLogin(){
    this.negocio.login(this.v).subscribe(
      (datos)=>{
        this.vendedor=datos["records"];
        if(this.vendedor.length != 0){
          //console.log(this.vendedor)
          alert("Bienvenido "+this.vendedor[0].nombre+" "+this.vendedor[0].aPaterno+" "+this.vendedor[0].aMaterno);
          if(this.recordar){
            if (typeof(Storage) !== "undefined") {
              // Store
              localStorage.setItem("usuario", this.v.usuario);
              localStorage.setItem("contrasena", this.v.contrasena);
              // Retrieve
            } 
          }else{
            localStorage.removeItem("usuario");
            localStorage.removeItem("contrasena");
          }
          this.navCtrl.push(VentasPage, {
            vendedor: this.vendedor[0]
          });
        }else{
          alert("Usuario y/o contraseña no validos");
        }
      }, (error)=>{
        alert("No se pudo conectar con el servidor");
        console.log(error);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){
    this.navCtrl.push(HomePage);
  }

  registrarse(){
    this.navCtrl.push(RegistroPage);
  }

}
