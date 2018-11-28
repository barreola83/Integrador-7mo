import { NegocioProvider } from './../../providers/negocio/negocio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NuevoUsuarioPage } from '../nuevo-usuario/nuevo-usuario';

/**
 * Generated class for the SeleccionarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccionar-usuario',
  templateUrl: 'seleccionar-usuario.html',
})
export class SeleccionarUsuarioPage {

  public vendedor;
  public clientes=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public negocio:NegocioProvider) {
    this.vendedor=navParams.get("vendedor");
    //console.log(this.vendedor);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SeleccionarUsuarioPage');
    this.cargarUsuarios();
  }


  registrarUsuario(){
    this.navCtrl.push(NuevoUsuarioPage,{
      vendedor: this.vendedor
    })
  }

  cargarUsuarios(){
    this.negocio.mostrarClientes(this.vendedor.idVendedor).subscribe(
      (data)=>{
        this.clientes=data["records"];
        console.log(this.clientes)
      },(error)=>{
        alert("Error al recuperar clientes");
        console.log(error);
      }
    )
  }

  seleccionar(c){
    this.navCtrl.getPrevious().data.cliente=c;
    this.navCtrl.pop();
  }

}
