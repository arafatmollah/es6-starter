//normal function
function add(num1,num2) {
    return num1 + num2;
}
const sum = add(12, 34);

const add2 = function (num1, num2) {
    return num1 + num2;
}
const sum2 = add2(12, 34);

const add3 = function add3(num1, num2) {
    return num1 + num2;
}
const sum3 = add3(12, 34);
console.log(sum, sum2, sum3);
//arrow function
const sumofnumber = (n1, n2) => n1 + n2;
const sum4 = sumofnumber(12, 34);
    console.log(sum4)