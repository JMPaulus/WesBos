console.log('Ways to make a function');

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

// returning an object

// function theBaby (first, last){
//   const baby = {
//   name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// const theBaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// is it more readable arrow function?
const theBaby = (first, last) => ({name: `${first} ${last}`, age: 0});

//IIFE
// Immediate Invoked Function Expression
/* eslint-disable */
(function (){
  console.log('running the anon function');
  return 'You are cool';
})();

(function (){
  console.log('the anon function will run only in the parenthesis');
  return 'This is the anon function running in parenthesis';
})();

// Methods
// a function that lives in an object

const Jedrzej = {
  name: 'Jedrzej Paulus',
  //Method
  sayHello: function(){
    console.log('Hello Jedrzej');
    return('Hi Jedrzej');
  },
  // Short hand method
  sayYo() {
    console.log('Yo JJ');
  },
// short hand arrow function
  wisper: () => {
    console.log('sss hii JJ, I am a mosue');
  }
}

//callback function
//click callback

const button = document.querySelector('.clickMe');
console.log(button);

button.addEventListener('click', Jedrzej.sayYo );