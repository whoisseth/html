/** @format */

let a = 6;
let b = 7;

// console.log("a + b =", a + b);

const number1 = document.getElementById("num1").value;
const number2 = document.getElementById("num2").value;
const output = document.getElementById("output");

// console.log("number1", number1);
console.log("add", add(4, 2));

function sum() {
  output.innerHTML = number1 + number2;
}

// function add(a, b) {

//     console.log('hello')
//   return a + b;
// }
