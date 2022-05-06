const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0,2);
console.log(numbers2);

const numbers3 = numbers.slice(numbers.length-3);
console.log(numbers3);

const randomStuff = colors.splice(length-2);
console.log(colors);
console.log(randomStuff);

const newCars = cars.splice(2,4,"test");
console.log(newCars);
console.log(cars);