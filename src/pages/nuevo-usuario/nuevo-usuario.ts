import { NegocioProvider } from './../../providers/negocio/negocio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NuevoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-usuario',
  templateUrl: 'nuevo-usuario.html',
})
export class NuevoUsuarioPage {

  public vendedor;
  public cliente=[];
  mensaje:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio:NegocioProvider) {
    this.vendedor=navParams.get("vendedor");
    //console.log(this.vendedor.idVendedor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoUsuarioPage');
  }

  AgregarCliente(){
    this.negocio.registroCliente(this.vendedor.idVendedor, this.cliente).subscribe(
      (data)=>{
        this.mensaje=data;
        if(this.mensaje.status=="ok"){
          alert("Cliente agregado con exito");
        }else{
          alert("No se pudo agregar el cliente");
        }
      },(error)=>{
        alert("Error al añadir el cliente");
        console.log(error);
      }
    )
  }

}
