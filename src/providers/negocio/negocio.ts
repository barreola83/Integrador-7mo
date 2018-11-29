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

  mostrarClientesId(vendedor, cliente){
    var uri="https://fgarcia14.tk/apiRest/showClientsById.php?vendedor="+vendedor+"&cliente="+cliente;
    //console.log(uri)
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

  mostrarProductosId(vendedor, producto){
    var uri="https://fgarcia14.tk/apiRest/showProductsById.php?vendedor="+vendedor+"&producto="+producto;
    //console.log(uri)
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  registroVenta(vendedor, cliente, producto, fecha, restante, pago, siguiente){
    var uri="https://fgarcia14.tk/apiRest/newSale.php?vendedor="+vendedor+"&cliente="+cliente+"&producto="+producto+"&fecha="+fecha+"&tipoPago="+pago+"&montoRestante="+restante+"&siguienteAbono="+siguiente;
    console.log(uri);
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  mostrarVentas(vendedor){
    var uri="https://fgarcia14.tk/apiRest/showSales.php?vendedor="+vendedor
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  actualizarCliente(cliente){
    var uri="https://fgarcia14.tk/apiRest/updateClient.php?idCliente="+cliente.idCliente+"&aPaterno="+cliente.aPaterno+"&aMaterno="+cliente.aMaterno+"&nombre="+cliente.nombre+"&telefono="+cliente.telefono+"&correo="+cliente.correo+"&comentarios="+cliente.comentarios+"&fotoCliente="+cliente.fotoCliente;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  actualizarProducto(producto){
    var uri="https://fgarcia14.tk/apiRest/updateProduct.php?idProducto="+producto.idProducto+"&nombreProducto="+producto.nombreProducto+"&precioVenta="+producto.precioVenta+"&cantidad="+producto.cantidad+"&precioCosto="+producto.precioCosto+"&descripcion="+producto.descripcion+"&fotoProducto="+producto.fotoProducto;
    
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  eliminarProducto(producto){
    var uri="https://fgarcia14.tk/apiRest/deleteProduct.php?idProducto="+producto;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  eliminarCliente(cliente){
    var uri="https://fgarcia14.tk/apiRest/deleteClient.php?idCliente="+cliente;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  eliminarVenta(venta){
    var uri="https://fgarcia14.tk/apiRest/deleteSale.php?idVenta="+venta;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  registrarAbono(venta, cantidad){
    var uri="https://fgarcia14.tk/apiRest/addAbono.php?venta="+venta+"&cantidad="+cantidad;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  actualizarVentaPorAbono(venta,restante, siguiente){
    var uri="https://fgarcia14.tk/apiRest/updateVentaByAbono.php?venta="+venta+"&montoRestante="+restante+"&siguienteAbono="+siguiente;
    console.log(uri);
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  verAbonos(venta){
    var uri="https://fgarcia14.tk/apiRest/showAbonos.php?venta="+venta;
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

  actualizaVenta(venta, cliente, producto, fecha, restante, pago, siguiente){
    var uri="https://fgarcia14.tk/apiRest/updateSale.php?idVenta="+venta+"&cliente="+cliente+"&producto="+producto+"&fecha="+fecha+"&tipoPago="+pago+"&montoRestante="+restante+"&siguienteAbono="+siguiente;
    console.log(uri);
    var encoded=encodeURI(uri);
    return this.http.get(encoded);
  }

}
