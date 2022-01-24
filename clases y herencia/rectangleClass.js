class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  //Getter

  get area() {
    return this.calcArea();
  }

  //Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10,10);
const rectangulo = new Rectangle(20,30);
const rectangulo2 = new Rectangle(25,15);

console.log(square.area);
console.log(rectangulo.area);
console.log(rectangulo2.area);