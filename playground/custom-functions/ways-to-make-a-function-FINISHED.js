console.log('Ways to make a function works works');

// annonymous function
// function (firstName){
//     return `Good day Dr. ${firstName}`;
// }

// function expression - putting a function into variable

const doctorize = function(firstName) {
  return `Hi Dr. ${firstName}`;
};

const summaryOfNumbers = function(addNumbers) {
  return `The sum of this operation is ${addNumbers}`;
};

// Arrow function - shorter function, concise syntax

function inchToCm(inches){ // regular function
  const cm = inches * 2.54;
  return cm;
}

function inchtoCm2(inches) {
  return inches * 2.54;
}
/* eslint-disable */

const cmToInch = (centimeter) => {
  return centimeter / 2.54;
}

// how to make an arrow function easier

const cmToInch2 = (centimeter) => centimeter / 2.54;

// if there is only one parameter, we can remove the parenthesis

const cmtoInch3 = centimeter => centimeter / 2.54;

function add( a, b = 3){
  const total = a + b;
  return total;
}
// this block can be turned to an arrow function
const adding = (a, b = 3) => a + b;