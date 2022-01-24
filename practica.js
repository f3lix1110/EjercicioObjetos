/*Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL
Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.*/

let articulo = {
    nombre: "Caguamas",
    descripcion: "Bien helodias" ,
    precio: 25,
    cantidad: 30,
    concatenar: function(){
        return `${this.nombre} ${this.descripcion} ${this.precio} ${this.cantidad}`
    }
    // imagen: URL("https://blog.tacoguru.com/wp-content/uploads/2018/} /Template-Blog-No-Carrusel-4.png")
}
document.getElementById("hola").innerHTML = articulo.concatenar();



let venta = {
articulos: articulo.nombre,
total: 25,
ID: 1234,
mail: "equipo6@gmail.com"
}

document.getElementById('hola5').innerHTML = venta.articulos.nombre;
document.getElementById('hola6').innerHTML = venta.total;
document.getElementById('hola7').innerHTML = venta.ID;
document.getElementById('hola8').innerHTML = venta.mail;

