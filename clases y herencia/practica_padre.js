let apellido = prompt("Introduce el apellido del padre: ");
let nombre1 = prompt("Introduce el nombre del primer hijo: ");
let nombre2 = prompt("Introduce el nombre del segundo hijo: ");

class padre {
  constructor(apellido) {
    this.apellidoPadre = apellido;
  }
}

class hijo extends padre { //extends es la clase que se esta heredando
  constructor(nombre, apellido) {
    super(apellido);      //heredamos el apellido de la clase padre
    this.nombreHijo = nombre;
  }

  registro() {
    return (
      "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
  }
}

let Hijo1 = new hijo(nombre1, apellido);//insertamos los datos al objeto
let Hijo2 = new hijo(nombre2, apellido);

document.getElementById("Id").innerHTML = Hijo1.registro();//mandamos a extraer del objeto el metodo para imprimir los datos para mandarlo mediante id al DOM
document.getElementById("Id2").innerHTML = Hijo2.registro();
