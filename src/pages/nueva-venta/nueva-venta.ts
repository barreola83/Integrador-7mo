import { SeleccionarProductoPage } from './../seleccionar-producto/seleccionar-producto';
import { SeleccionarUsuarioPage } from './../seleccionar-usuario/seleccionar-usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NuevaVentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva-venta',
  templateUrl: 'nueva-venta.html',
})
export class NuevaVentaPage {

  public vendedor;
  public cliente;
  public producto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vendedor = navParams.get("vendedor");
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad NuevaVentaPage');
  }
  
  public ionViewWillEnter() {
    if(this.navParams.get('cliente')!=null){
      this.cliente=this.navParams.get('cliente');
    }else{
      this.cliente=null;
    }
    if(this.navParams.get('producto')!=null){
      this.producto=this.navParams.get('producto');
    }else{
      this.producto=null;
    }

    console.log(this.cliente);
    console.log(this.producto);
  } 

  seleccionarCliente(){
    this.navCtrl.push(SeleccionarUsuarioPage,{
      vendedor: this.vendedor
    })
  }

  seleccionarProducto(){
    this.navCtrl.push(SeleccionarProductoPage,{
      vendedor: this.vendedor
    })
  }
}
