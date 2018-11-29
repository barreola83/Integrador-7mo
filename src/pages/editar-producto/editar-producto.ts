import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';

/**
 * Generated class for the EditarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-producto',
  templateUrl: 'editar-producto.html',
})
export class EditarProductoPage {

  public vendedor:any;
  public producto:any;
  mensaje:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio:NegocioProvider) {
    this.vendedor=navParams.get("vendedor");
    this.producto=navParams.get("producto");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarProductoPage');
  }

  guardar(){
    this.negocio.actualizarProducto(this.producto).subscribe(
      (data)=>{
        this.mensaje=data
        if(this.mensaje.status=="ok"){
          alert("Producto actualizado con exito!");
        }else{
          alert("No se pudo actualizar el producto");
        }
      },(error)=>{
        alert("Error al actualizar el producto");
        console.log(error);
      }
    )
  }

}
