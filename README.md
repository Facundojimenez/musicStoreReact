# Music Store React

Este proyecto se trata de una aplicacion web que **simula la compra** de instrumentos y equipamiento musical.

En ella se pueden agregar productos al carrito, crear pedidos y enviar un mensaje a traves de un formulario de contacto. (creado con **EmailJS**)

La aplicación fue creada con **React**, manejando la estética con la librería **Material UI** y también **Swiper** para crear los carruseles de fotos.

**Link a la página** : https://musicstorereact.herokuapp.com/

# Demo

![alt text](https://firebasestorage.googleapis.com/v0/b/musicstorereact.appspot.com/o/2021-09-27%2011-51-49.gif?alt=media&token=d544eb79-cd11-4830-ab81-b1bb4ac8768a)

# Secciones de la página:

## Home:

![alt text](https://firebasestorage.googleapis.com/v0/b/musicstorereact.appspot.com/o/home.jpg?alt=media&token=60e81fb6-96bc-4e28-bafd-b77403c9daa9)

En esta sección se ve un banner de bienvenida, y se puede navegar a las dos categorías de productos: Guitarras y Amplificadores.

Además, en la parte inferior, hay un carrusel de productos recomendados, el cual lleva al usuario al producto en seleccionado.

## Productos:

![alt text](https://firebasestorage.googleapis.com/v0/b/musicstorereact.appspot.com/o/productos.PNG?alt=media&token=5c46593b-3edd-458f-9700-f4f2396c4489)

Aquí el usuario verá los productos disponibles para la compra. Haciendo click en la foto de un producto, será llevado a la página del detalle del mismo.

## Detalle del Producto:

![alt text](https://firebasestorage.googleapis.com/v0/b/musicstorereact.appspot.com/o/detalle%20producto.PNG?alt=media&token=d17c3c28-440b-4a60-bcd9-6a379b110623)

Esta página permite que el usuario tenga más información sobre el producto que quiere comprar: La imagen es más grande y hay una descrpción sobre las caracteristicas del producto.
Pero principalmente, en esta página se puede elegir la cantidad de unidades a agregar al carrito para su posterior compra.

## Carrito: 

![alt text](https://firebasestorage.googleapis.com/v0/b/musicstorereact.appspot.com/o/carrito.PNG?alt=media&token=275e5b56-d760-4752-976e-a6669e635fe0)

En el carrito, el usuario verá los productos que eligió junta a la cantidad de unidades y el precio resultante. Aquí se puede modificar la cantidad de unidades, ya sea para quitar o agregar más unidades.

(en caso de que la cantidad de unidades sea menor a 0, el producto será retirado del carrito).


También, el usuario tiene la posibilidad de eliminar productos del carrito haciendo click en la cruz, situada en la esquina superior derecha de cada producto.

Para confirmar la compra, el usuario deberá completar un formulario con sus datos, los cuales seran guardados en una base de datos de Firebase. Una vez confirmada la orden, el usuario recibe un número de pedido/seguimiento.

## Contacto:

![alt text](https://firebasestorage.googleapis.com/v0/b/musicstorereact.appspot.com/o/contacto.PNG?alt=media&token=b154ba67-119f-43d5-a95d-1e1142d7e86e)

Aquí, el usuario puede enviar un mensaje a mi (o a quien fuera el dueño de la página). Debe completar obligatoriamente su email para que podamos contactarnos con él y responderle vía mail.


