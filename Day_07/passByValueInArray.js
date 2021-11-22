let car = {name : 'Creta', model: '2018'};
console.log(car.name);

let secondCar = {...car};

console.log("Object 1 : Car : ", car);
console.log("Object 2 : secondCar : ", secondCar);

car.name = 'Innova';

console.log("Object 1 : Car : ", car);
console.log("Object 2 : secondCar : ", secondCar);
