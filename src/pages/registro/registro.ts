import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  mensaje:any;
  public vendedor=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio:NegocioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrar(){
    this.negocio.registro(this.vendedor).subscribe(
      (datos)=>{
        this.mensaje=datos;
        if(this.mensaje.status=="ok"){
          alert("¡Usuario registrado!");
        }else{
          alert("No se pudo registrar el usuario");
        }
      }, (error)=>{
        alert("Error al registrarse");
        console.log(error);
      }
    )
  }

}
