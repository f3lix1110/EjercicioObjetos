var apellido = prompt("Introduce el apellido del padre: ");
var nombre1 = prompt("Introduce el nombre del primer hijo: ");
var nombre2 = prompt("Introduce el nombre del segundo hijo: ");

class padre {
  constructor(apellido) {
    this.apellidoPadre = apellido;
  }
}

// var padre = {

//   apellidoPadre:"parámetro del constructor"

// }

class hijo extends padre {
  constructor(nombre, apellido) {
    super(apellido);
    this.nombreHijo = nombre;
  }

  registro() {
    return (
      "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
  }
}

let Hijo1 = new hijo(nombre1, apellido);
let Hijo2 = new hijo(nombre2, apellido);

document.getElementById("Id").innerHTML = Hijo1.registro();
document.getElementById("Id2").innerHTML = Hijo2.registro();
