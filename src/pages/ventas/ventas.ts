import { NuevaVentaPage } from './../nueva-venta/nueva-venta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VentasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {

  public vendedor;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vendedor=navParams.get("vendedor");
    //console.log(this.vendedor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentasPage');
  }

  NuevaVenta(){
    this.navCtrl.push(NuevaVentaPage,{
      vendedor: this.vendedor
    })
  }

}
