// interface CarProperties {
//   name: string;
//   model: string;
//   year: number;
// }
class Car {
  name: string;
  model: string;
  year: number;
  
  constructor(name: string, model: string, year: number) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  getCarAge(){
    const currentYear=2024;
    const carAge=currentYear-this.year;
    return carAge;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
console.log(car.getCarAge());
