# Instalación del software
La instalción de la app es muy sencilla, basta con hacer los siguientes pasos:
- 1 Descargar el APK de este repositorio.
- 2 Una vez descargado deben de en configuración del sistema permitir instalación de orígenes desconocidos.
- 3 Una vez hecho eso, se van a la ubicación donde se descargó el APK y preceden a instalarla presionando sobre la aplicación y siguiendo los pasos sencillos del instalador.
- 4 UNa vez instalada el APK podrás disfrutar de los beneficios de la app.

NOTA: para instalar el APK el dispositivo móvil deberá contener Android 4.4 en adelante.

<br></br>
# Documentación generada
- ### Diagrama conceptual.

![diagramas de casos de uso-modulos del software v2 sin reportes](https://user-images.githubusercontent.com/26887605/49257928-61eb0a80-f3f9-11e8-94c9-3329a81411bd.jpg) 


<br></br>

- ### Historias de usuario


ID | QUIEN | QUE | PARA QUE
-- | -- | -- | --
1 | Administrador | Como administrador, quiero visualizar la información personal de mi cliente al buscarlo por su nombre. | Para filtrar y obtener un resultado rápido al momento de consultar la venta de un cliente.
2 | Administrador | Como administrador, quiero ver el listado de abonos realizados por los productos comprados por un cliente. | Para filtrar y obtener un resultado rápido al momento de consultar la venta de un cliente.
3 | Administrador | Como administrador, quiero ver el historial de productos que un cliente ha adquirido. | Para saber que productos en un futuro ofrecerle como recomendación.
4 | Administrador | Como administrador, quiero visualizar el estatus de productos ya pagados y faltantes por pagar. | Para saber que clientes son los que deben dinero.
5 | Administrador | Como administrador, quiero dar de baja a un cliente. | Para no saturar la base de datos con clientes que no consumen productos.
6 | Administrador | Como administrador, quiero poder dar de alta a un nuevo cliente. | Para poder venderle productos.
7 | Administrador | Como administrador, quiero poder hacer cambios en la información personal de un cliente. | En determinado caso que se cambie de domicilio, poder actualizarlo al más reciente.
8 | Administrador | Como administrador, quiero poder agregar un nuevo producto. | Para expandir mi inventario a más productos.
9 | Administrador | Como administrador, quiero modificar la información de un producto. | Para actualizar la información del producto (precio, estatus, etc).
10 | Administrador | Como administrador, quiero poder dar de baja un producto. | Para que en determinado caso que esté defectuoso, no se venda a los clientes.
11 | Administrador | Como administrador, quiero visualizar en una imagen el producto a vender. | Para mostrarlo a los clientes.
12 | Administrador | Como administrador, quiero ver información principal del producto como lo es el nombre, una descripción y el precio del producto. | Para conocer la información del producto a vender.
13 | Administrador | Como administrador, quiero que los productos se puedan vender de contado o en abonos. | Para otorgarle al cliente el método de pago que mejor le convenga.
14 | Administrador | Como administrador, quiero establecer una fecha de pago semanal, quincenal o mensual. | Para llevar un control de los abonos.
15 | Administrador | Como administrador, quiero establecer el día de cobro exacto en el que se hará el abono del producto, estableciendo la hora exacta y el día exacto. | Para llevar un control de los abonos.
16 | Administrador | Como administrador, quiero que la aplicación registre la cantidad de abono pactada y no de posibles abonos. | Para llevar un control de los abonos.
17 | Administrador | Como administrador, quiero un reporte de las personas registradas mostrando su domicilio y la cantidad del abono a recoger por día, semana o por mes. | Para ver de manera detallada el listado de las personas que deben.
18 | Administrador | Como administrador, quiero ver el total de abonos recogidos por día, semana o por mes. | Para llevar un control de los abonos.
19 | Administrador | Como administrador, quiero ver el total de abonos faltantes que le queda a un cliente para completar el pago total del producto vendido al día de hoy. | Para llevar un control de los abonos.
20 | Administrador | Como administrador, quiero que la aplicación funcione en sistema operativo IOS y Android. | Para no limitarme en un solo sistema operativo.
21 | Administrador | Como administrador, quiero que la interfaz de la aplicación tenga un nivel de usabilidad aceptable. | Para que no se requiera de mucho tiempo de capacitación.
22 | Administrador | Como administrador, quiero que la aplicación me permita logearme ingresando un usuario y una contraseña autorizada para su licencia de uso. | Para seguridad de la aplicación y de los datos que se tienen.
<br></br>

- ### Casos de uso


![diagramas de casos de uso-regsitro sin reportes](https://user-images.githubusercontent.com/26887605/49258245-5c41f480-f3fa-11e8-82e4-3ba14b665853.jpg)


<br></br>
- ### Diagrama entidad - relación


![diagrama entidad relacion](https://user-images.githubusercontent.com/26887605/49258550-6f08f900-f3fb-11e8-98dc-796671050e86.png)



<br></br>
- ### Diccionario de datos


![abonos](https://user-images.githubusercontent.com/26887605/49259447-03c12600-f3ff-11e8-83eb-bd2529f3373f.JPG)


![2clientes](https://user-images.githubusercontent.com/26887605/49259460-1176ab80-f3ff-11e8-82b2-f420da734b65.JPG)


![3productos](https://user-images.githubusercontent.com/26887605/49259472-1dfb0400-f3ff-11e8-8a4d-425b1ad55c5c.JPG)


![4vendedor](https://user-images.githubusercontent.com/26887605/49259482-2b17f300-f3ff-11e8-9b32-2c13041944d6.JPG)


![5ventas](https://user-images.githubusercontent.com/26887605/49259494-35d28800-f3ff-11e8-80fd-081d9df22237.JPG)


![relacion](https://user-images.githubusercontent.com/26887605/49259550-6f0af800-f3ff-11e8-854d-86865f53200c.JPG)




<br></br>
- ### Interfaces de usuario
- ### Login
![login](https://user-images.githubusercontent.com/26887605/49259649-dd4fba80-f3ff-11e8-943a-2fb3662c2cb4.png)

<br></br>
- ### Registro
![registro](https://user-images.githubusercontent.com/26887605/49259671-f9535c00-f3ff-11e8-9a5c-ba277cbf1a67.png)

<br></br> 
- ### Ventas
![ventas](https://user-images.githubusercontent.com/26887605/49259690-0bcd9580-f400-11e8-9de5-7a2da0ccde1a.png)

<br></br>
- ### Ver venta
![verventa](https://user-images.githubusercontent.com/26887605/49259709-1c7e0b80-f400-11e8-8c12-c33c53ccf337.png)

<br></br>
- ### Clientes
![clientes](https://user-images.githubusercontent.com/26887605/49259727-2d2e8180-f400-11e8-8f50-2807a2277c72.png)

<br></br>
- ### Editar cliente
![editarcliente](https://user-images.githubusercontent.com/26887605/49259744-4800f600-f400-11e8-9a13-6fd3295779fa.png)

<br></br>
- ### Productos
![productos](https://user-images.githubusercontent.com/26887605/49259758-59e29900-f400-11e8-8fb0-139802a69a09.png)

<br></br>
- ### Editar productos
![editarproducto](https://user-images.githubusercontent.com/26887605/49259778-68c94b80-f400-11e8-84f4-ccab94b3e801.png)

<br></br>
- ### Agregar abono
![agregarabono](https://user-images.githubusercontent.com/26887605/49259797-77176780-f400-11e8-94df-65157783227d.png)

