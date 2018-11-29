import { SeleccionarUsuarioPage } from './../seleccionar-usuario/seleccionar-usuario';
import { SeleccionarProductoPage } from './../seleccionar-producto/seleccionar-producto';
import { NegocioProvider } from './../../providers/negocio/negocio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the EditarVentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-venta',
  templateUrl: 'editar-venta.html',
})
export class EditarVentaPage {

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

  public abonos:any;
  public v;

  constructor(public navCtrl: NavController, public navParams: NavParams, public negocio: NegocioProvider, public actionSheetCtrl:ActionSheetController) {
    this.vendedor=navParams.get("vendedor");
    this.v=(navParams.get("venta"));
    this.negocio.mostrarClientesId(this.vendedor.idVendedor, this.v.idCliente).subscribe(
      (data)=>{
        this.cliente=(data[0]);
      }
    );
    this.negocio.mostrarProductosId(this.vendedor.idVendedor, this.v.idProducto).subscribe(
      (data)=>{
        this.producto=(data[0]);
      }
    );

    this.negocio.verAbonos(this.v.idVenta).subscribe(
      (data)=>{
        this.abonos=data["records"];
      },(error)=>{
        alert("Error al recuperar clientes");
        console.log(error);
      }
    )
    
    this.fecha=this.v.fecha;
    this.tipoPago=this.v.tipoPago;
    console.log(this.fecha)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarVentaPage');
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

  setFecha(e:any){
    console.log(e._value);
    this.fecha=e._value;
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

  guardarVenta(){
    var siguientePago=null;
    var pagadoMomento=0;
    this.abonos.forEach(abono => {
      pagadoMomento+=parseInt(abono.cantidad,10)
    });
    var montoRestante=parseInt(this.producto.precioVenta,10)-pagadoMomento

    if(this.tipoPago=="Contado" || this.v.montoRestante==0){
      montoRestante=0;
      siguientePago=null;
    }else if(this.tipoPago=="Semanal"){
      siguientePago=this.addDays(this.fecha, 7,0);
    }else if(this.tipoPago=="Mensual"){
      siguientePago=this.addDays(this.fecha, 0,1);
    }else if(this.tipoPago=="Quincenal"){
      siguientePago=this.addDays(this.fecha, 15,0);
    }

    this.negocio.actualizaVenta(this.v.idVenta,this.cliente.idCliente,this.producto.idProducto,this.fecha,montoRestante,this.tipoPago,siguientePago).subscribe(
      (data)=>{
        this.mensaje=data
        if(this.mensaje.status=="ok"){
          alert("Venta actualizada!");
        }else{
          alert("No se pudo actualizar la venta");
        }
      },(error)=>{
        alert("Error al actualizar la venta");
        console.log(error);
      }
    );
  }
}
