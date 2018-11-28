import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NegocioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NegocioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NegocioProvider Provider');
  }

  registro(vendedor){
    var uri="https://fgarcia14.tk/apiRest/register.php?aPaterno="+vendedor.aPaterno+"&aMaterno="+vendedor.aMaterno+"&nombre="+vendedor.nombre+"&usuario="+vendedor.usuario+"&contrasena="+vendedor.contrasena;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  login(vendedor){
    var uri="https://fgarcia14.tk/apiRest/login.php?usuario="+vendedor.usuario+"&contrasena="+vendedor.contrasena
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  registroCliente(vendedor, cliente){
    var uri="https://fgarcia14.tk/apiRest/newClient.php?vendedor="+vendedor+"&aPaterno="+cliente.aPaterno+"&aMaterno="+cliente.aMaterno+"&nombre="+cliente.nombre+"&telefono="+cliente.telefono+"&correo="+cliente.correo+"&comentarios="+cliente.comentarios+"&foto="+cliente.foto;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  mostrarClientes(vendedor){
    var uri="https://fgarcia14.tk/apiRest/showClients.php?vendedor="+vendedor;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  registroProducto(vendedor, producto){
    var uri="https://fgarcia14.tk/apiRest/newProduct.php?vendedor="+vendedor+"&nombreProducto="+producto.nombreProducto+"&precioVenta="+producto.precioVenta+"&cantidad="+producto.cantidad+"&precioCosto="+producto.precioCosto+"&descripcion="+producto.descripcion+"&foto="+producto.foto;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  mostrarProductos(vendedor){
    var uri="https://fgarcia14.tk/apiRest/showProducts.php?vendedor="+vendedor;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }
}
