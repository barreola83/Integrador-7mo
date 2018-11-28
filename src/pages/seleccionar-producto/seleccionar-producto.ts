import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoProductoPage } from '../nuevo-producto/nuevo-producto';
import { NegocioProvider } from '../../providers/negocio/negocio';

/**
 * Generated class for the SeleccionarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccionar-producto',
  templateUrl: 'seleccionar-producto.html',
})
export class SeleccionarProductoPage {

  public vendedor;
  public productos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio:NegocioProvider) {
    this.vendedor=navParams.get("vendedor");
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SeleccionarProductoPage');
    this.cargarProductos();
  }

  registrarProducto(){
    this.navCtrl.push(NuevoProductoPage,{
      vendedor: this.vendedor
    })
  }

  cargarProductos(){
    this.negocio.mostrarProductos(this.vendedor.idVendedor).subscribe(
      (data)=>{
        this.productos=data["records"];
        console.log(this.productos)
      },(error)=>{
        alert("Error al recuperar clientes");
        console.log(error);
      }
    )
  }

  seleccionar(p){
    this.navCtrl.getPrevious().data.producto=p;
    this.navCtrl.pop();
  }
}
