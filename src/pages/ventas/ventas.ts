import { EditarVentaPage } from './../editar-venta/editar-venta';
import { NuevoUsuarioPage } from './../nuevo-usuario/nuevo-usuario';
import { NuevoProductoPage } from './../nuevo-producto/nuevo-producto';
import { NuevaVentaPage } from './../nueva-venta/nueva-venta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, ModalController } from 'ionic-angular';
import { NegocioProvider } from '../../providers/negocio/negocio';
import { EditarProductoPage } from '../editar-producto/editar-producto';
import { Title } from '@angular/platform-browser';
import { EditarUsuarioPage } from '../editar-usuario/editar-usuario';


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
  page: string="ventas";
  public vendedor;
  public ventas=[];
  public clientes=[];
  public productos=[];

  mensaje:any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public negocio:NegocioProvider, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
    this.vendedor=navParams.get("vendedor");
    //console.log(this.vendedor);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad VentasPage');
    this.cargarVentas()
    this.cargarUsuarios();
    this.cargarProductos();
  }

  NuevaVenta(){
    this.navCtrl.push(NuevaVentaPage,{
      vendedor: this.vendedor
    })
  }

  NuevoProducto(){
    this.navCtrl.push(NuevoProductoPage,{
      vendedor: this.vendedor
    })
  }

  NuevoCliente(){
    this.navCtrl.push(NuevoUsuarioPage,{
      vendedor: this.vendedor
    })
  }

  cargarVentas(){
    this.negocio.mostrarVentas(this.vendedor.idVendedor).subscribe(
      (data)=>{
        this.ventas=data["records"];
        console.log(this.ventas)
      },(error)=>{
        alert("Error al recuperar clientes");
        console.log(error);
      }
    )
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

  seleccionarVenta(v){
    const actionSheet=this.actionSheetCtrl.create({
      title: 'Opciones',
      buttons: [
        {
          text: 'Agregar abono',
          handler: ()=>{
            if(v.montoRestante==0){
              alert("Producto pagado en su totalidad")
            }else if(v.tipoPago=="Contado"){
              alert("Opcion no disponible para este tipo de pago")
            }
            else{
              const prompt=this.alertCtrl.create({
                title: 'Agregar abono',
                message: 'Ingrese una cantidad',
                inputs: [
                  {
                    name: 'cantidad',
                    placeholder: 'cantidad'
                  }
                ],
                buttons:[
                  {
                    text: 'Guardar',
                    handler: data => {
                      this.registrarAbono(v, data);
                    }
                  },
                  {
                    text: 'Cancelar'
                  }
                ]
              });
              prompt.present();
            }
          }
        },{
          text: 'Ver venta',
          handler: ()=>{
            this.navCtrl.push(EditarVentaPage,{
              vendedor: this.vendedor,
              venta: v
            })
          }
        },
        {
          text: 'Eliminar venta',
          role: 'destructive',
          handler: () => {
            const confirm=this.alertCtrl.create({
              title: 'Peligro',
              message: '¿Estas seguro de eliminar esta venta?',
              buttons: [
                {
                  text: 'Si',
                  handler: ()=>{
                    this.negocio.eliminarVenta(v.idVenta).subscribe(
                      (data)=>{
                        this.mensaje=data
                        if(this.mensaje.status=="ok"){
                          alert("La venta ha sido eliminada");
                          this.ionViewDidEnter();
                        }else{
                          alert("No se pudo eliminar la venta");
                        }
                      }
                    )
                  }
                },
                {
                  text: 'No'
                }
              ]
            });
            confirm.present();
          }
        },{
          text: 'Cancelar',
          role: 'cancel'
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
    f=[yy,
      (dd>9 ? '' : '0') + dd,
      (mm>9 ? '' : '0') + mm
     ].join('-');
    return f;
  }

  registrarAbono(v, data){
    console.log(v.fecha);
    console.log(v.tipoPago);
    console.log(v.idVenta);
    console.log(data.cantidad)

    var siguiente;
    var restante=parseInt(v.montoRestante,10)-parseInt(data.cantidad,10);
    var ban=true;
    if(restante<0){
      alert("Cantidad mayor a cantidad restante")
      ban=false;
    }else if (restante==0){
      siguiente=null;
    }else{
      switch (v.tipoPago) {
        case "Semanal":
          siguiente=this.addDays(v.siguienteAbono,7,0);
        break;
        case "Mensual":
          siguiente=this.addDays(v.siguienteAbono,0,1);
        break
        case "Quincenal":
          siguiente=this.addDays(v.siguienteAbono,15,0);
        break;
      }
    }

    if(ban){
      
    this.negocio.registrarAbono(v.idVenta, data.cantidad).subscribe(
      
      (data)=>{
        this.mensaje=data
        if(this.mensaje.status=="ok"){
          this.negocio.actualizarVentaPorAbono(v.idVenta, restante, siguiente).subscribe(
            (data)=>{
              this.mensaje=data
              if(this.mensaje.status=="ok"){
                alert("Abono añadido!");
                this.ionViewDidEnter();
              }else{
                alert("No se ha encontrado el abono");
              }
            }
          );
          this.ionViewDidEnter();
        }else{
          alert("No se ha añadido el abono");
        }
      }
    );
    }
    
  }

  seleccionarProducto(p){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones:',
      buttons :[
        {
          text: 'Editar producto',
          handler: () =>{
            this.navCtrl.push(EditarProductoPage,{
              producto: p,
              vendedor: this.vendedor
            })
          }
        },
        {
          text: 'Eliminar producto',
          role: 'destructive',
          handler: ()=>{
            const confirm=this.alertCtrl.create({
              title: 'Peligro',
              message: '¿Estas seguro de eliminar este producto?',
              buttons: [
                {
                  text: 'Si',
                  handler: ()=>{
                    this.negocio.eliminarProducto(p.idProducto).subscribe(
                      (data)=>{
                        this.mensaje=data
                        if(this.mensaje.status=="ok"){
                          alert("El producto ha sido eliminado");
                          this.ionViewDidEnter();
                        }else{
                          alert("No se pudo eliminar el producto");
                        }
                      }
                    )
                  }
                },
                {
                  text: 'No'
                }
              ]
            });
            confirm.present();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  seleccionarCliente(c){/*
    this.navCtrl.push(EditarUsuarioPage, {
      cliente: c,
      vendedor: this.vendedor
    })*/
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones:',
      buttons :[
        {
          text: 'Editar cliente',
          handler: () =>{
            this.navCtrl.push(EditarUsuarioPage,{
              cliente: c,
              vendedor: this.vendedor
            })
          }
        },
        {
          text: 'Eliminar cliente',
          role: 'destructive',
          handler: ()=>{
            const confirm=this.alertCtrl.create({
              title: 'Peligro',
              message: '¿Estas seguro de eliminar este cliente? Todas las compras de el se eliminarán',
              buttons: [
                {
                  text: 'Si',
                  handler: ()=>{
                    this.negocio.eliminarCliente(c.idCliente).subscribe(
                      (data)=>{
                        this.mensaje=data
                        if(this.mensaje.status=="ok"){
                          alert("El cliente ha sido eliminado");
                          this.ionViewDidEnter();
                        }else{
                          alert("No se pudo eliminar el cliente");
                        }
                      }
                    )
                  }
                },
                {
                  text: 'No'
                }
              ]
            });
            confirm.present();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  logout(){
    this.actionSheetCtrl.create({
      buttons:[
        {
          text: "Cerrar sesion",
          handler: () => {
            localStorage.removeItem("usuario");
            localStorage.removeItem("contrasena");
            this.navCtrl.popToRoot();
          }
        }
      ]
    }).present();
    
  }

}
