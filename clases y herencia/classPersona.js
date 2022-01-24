
class persona {
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

const persona1 = new persona("Guillermo",1987);
const persona2 = new persona("Angeles", 2000);

console.log(persona1);
console.log(persona2);

document.getElementById("ID").innerHTML=persona1;

// var objeto = {
//   name = "Guillermo",
//   year = 1987
// }

// var objeto2 = {
//   name = "David",
//   year = 1987
// }
