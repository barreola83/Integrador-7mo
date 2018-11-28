import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';
import { RegistroPage } from '../registro/registro';
import { VentasPage } from '../ventas/ventas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mensaje:any;
  public v = {
    usuario: "",
    contrasena: ""
  };
  public vendedor=[];
  public recordar:any;

  constructor(public navCtrl: NavController, public negocio:NegocioProvider, public modalCtrl:ModalController) {
    this.recordar=false;
    if(localStorage.getItem("usuario")!=null && localStorage.getItem("contrasena")!=null){
      //console.log("Usuario encontrado")
      this.v.usuario=localStorage.getItem("usuario");
      this.v.contrasena=localStorage.getItem("contrasena");
      this.recordar=true;
      // this.login();
    }else{
      //console.log("Usuario no encontrado")
      this.v.usuario="";
      this.v.contrasena="";
      this.recordar=false;
    }
  }

  login(){
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
  
  public registrar(){
    this.navCtrl.push(RegistroPage);
  }

  onChange(e:any){
    
    this.recordar=e.checked;
    console.log(this.recordar);
  }
}
