const number = [25, 60, 78, 77, 45];
console.log(number)
console.log(...number);

const max = Math.max(25, 60, 87, 67);
console.log(max);

const number2 = [...number,89];
number2.push(65)
console.log(number2)
console.log(Math.max(...number2))