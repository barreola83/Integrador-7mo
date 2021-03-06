import { SeleccionarProductoPage } from './../seleccionar-producto/seleccionar-producto';
import { SeleccionarUsuarioPage } from './../seleccionar-usuario/seleccionar-usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';

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

  mensaje:any;
  public vendedor;
  public tipoPago:any;
  public cliente={
    idCliente: null,
    vendedor: null,
    aPaterno: null,
    aMaterno: null,
    nombre: null,
    telefono: null,
    correo: null,
    comentarios: null,
    fotoCliente: null
  };
  public producto={
    idProducto: null,
    vendedor: null,
    nombreProducto: null,
    precioVenta: null,
    cantidad: null,
    precioCosto: null,
    descripcion: null,
    fotoProducto: null
  };
  public fecha:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public negocio: NegocioProvider) {
    this.tipoPago="Contado";
    this.vendedor = navParams.get("vendedor");
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad NuevaVentaPage');
  }
  
  public ionViewWillEnter() {
    if(this.navParams.get('cliente')!=null){
      this.cliente=this.navParams.get('cliente');
    }
    if(this.navParams.get('producto')!=null){
      this.producto=this.navParams.get('producto');
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

  opcionesPago(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Tipo de pago',
      buttons: [
        {
          text: 'Contado',
          handler: () =>{
            this.tipoPago="Contado"
          }
        },
        {
          text: 'Pago semanal',
          handler: () =>{
            this.tipoPago="Semanal"
          }
        },
        {
          text: 'Pago quincenal',
          handler: () =>{
            this.tipoPago="Quincenal"
          }
        },
        {
          text: 'Pago mensual',
          handler: () =>{
            this.tipoPago="Mensual"
          }
        }
      ]
    });
    actionSheet.present();
  }

  addDays(f,days,mes){
    console.log(f)
    var date = new Date(f);
    date.setDate(date.getDate() + days);
    date.setMonth(date.getMonth() + mes);
    var dd=(date.getUTCMonth()+1);
    var mm=(date.getUTCDate());
    var yy=(date.getUTCFullYear());
    this.fecha=[yy,
      (dd>9 ? '' : '0') + dd,
      (mm>9 ? '' : '0') + mm
     ].join('-');
    return this.fecha;
  }

  setFecha(e:any){
    console.log(e._value);
    this.fecha=e._value;
  }

  guardarVenta(){
    console.log(this.fecha);
    var montoRestante=this.producto.precioVenta;
    var siguientePago=null;
    if(this.tipoPago=="Contado"){
      montoRestante=0;
      siguientePago=null;
    }else if(this.tipoPago=="Semanal"){
      montoRestante=this.producto.precioVenta;
      siguientePago=this.addDays(this.fecha, 7,0);
      console.log(siguientePago);
    }else if(this.tipoPago=="Mensual"){
      montoRestante=this.producto.precioVenta;
      siguientePago=this.addDays(this.fecha, 0,1);
      console.log(siguientePago);
    }else if(this.tipoPago=="Quincenal"){
      montoRestante=this.producto.precioVenta;
      siguientePago=this.addDays(this.fecha, 15,0);
      console.log(siguientePago);
    }
    
    
    this.negocio.registroVenta(this.vendedor.idVendedor,this.cliente.idCliente,this.producto.idProducto,this.fecha,montoRestante,this.tipoPago,siguientePago).subscribe(
      (data)=>{
        this.mensaje=data
        if(this.mensaje.status=="ok"){
          alert("Venta realizada!");
        }else{
          alert("No se pudo crear la venta");
        }
      },(error)=>{
        alert("Error al crear la venta");
        console.log(error);
      }
    )
  }
}
