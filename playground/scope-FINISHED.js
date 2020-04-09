console.log('it works');

// Global variable. Any time you declare a variable it will be availavle everywhere
const first = 'JJ';

function sayHi() {
  console.log('hi');
}

// function variable: the variable is only in the function
/* eslint-disable */

const age = 35;

function make() {
    const age = 200;
    const beard = 'black';
    console.log(beard);
    console.log(age);
}

make();


/* block scope */

let cool;
if( 1===1) {
  cool = true; // updating variable
}

console.log(cool);

const dog = 'Puszek';

function logDog(){
  console.log(dog);
}

function go(){
  const dog = 'Okruszek';
  logDog();
}

go();

// function scoping

function sayHello(name){
  function yell(){
    console.log(name.toUpperCase());
  }
  yell();
}