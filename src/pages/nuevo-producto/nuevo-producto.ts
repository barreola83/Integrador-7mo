import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';

/**
 * Generated class for the NuevoProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-producto',
  templateUrl: 'nuevo-producto.html',
})
export class NuevoProductoPage {

  public vendedor;
  public producto=[];
  mensaje:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio:NegocioProvider) {
    this.vendedor=navParams.get("vendedor");
    //console.log(this.vendedor.idVendedor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoProductoPage');
  }

  AgregarProducto(){
    this.negocio.registroProducto(this.vendedor.idVendedor, this.producto).subscribe(
      (data)=>{
        this.mensaje=data
        if(this.mensaje.status=="ok"){
          alert("Producto agregado con exito!");
        }else{
          alert("No se pudo agregar el producto");
        }
      },(error)=>{
        alert("Erro al agregar el producto");
        console.log(error);
      }
    )
  }

}
