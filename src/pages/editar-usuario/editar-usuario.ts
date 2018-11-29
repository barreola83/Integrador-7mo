import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';

/**
 * Generated class for the EditarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-usuario',
  templateUrl: 'editar-usuario.html',
})
export class EditarUsuarioPage {

  public vendedor;
  public cliente;
  mensaje:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider) {
    this.vendedor=navParams.get("vendedor");
    this.cliente=navParams.get("cliente");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarUsuarioPage');
  }

  guardar(){
    this.negocio.actualizarCliente(this.cliente).subscribe(
      (data)=>{
        this.mensaje=data
        if(this.mensaje.status=="ok"){
          alert("Cliente actualizado con exito!");
        }else{
          alert("No se pudo actualizar el cliente");
        }
      },(error)=>{
        alert("Erro al actualizar el cliente");
        console.log(error);
      }
    )
  }
}
