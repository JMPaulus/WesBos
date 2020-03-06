/* eslint-disable */
/*
const name = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = "shes's so \"cool\"";
const sentence2 = `shes's so "cool"`;

const song = `Ohhh

ya

I like
pizza`;

const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;

*/

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;
/*
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);

const price = 1034;
*/


/*
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};


let dog;
console.log(dog);
dog = 'snickers';


let somethingUndefined;
const somethingNull = null;

const cher = {
  first: 'cher'
};

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

*/

// let isDrawing = false;
// let age = 18;
// const ofAge = age > 19;
// console.log(ofAge);

// age = 100;
// let age2 = 100;


/////////////Starded from here///////////////
/* eslint-disable */
console.log('It works.')

const name = 'Jedrzej';
const middle = "Melchior";
const last = `Paulus`;

// concatenation

const hello = 'Hello, my name is ' + name + '. Nice to meet you.';

/// other, easier way

const hi = `Hello, my name is ${name} . Nice to meet you. I am ${30+5} years old.`;

const html = `
<div> 

<h2>${name}</h2>
<p>${hi}</p>

</div>
`;

document.body.innerHTML=html;


const smarties = 20;
const kids = 3;

const eachOfThemGets = Math.floor (smarties/kids);

const meGetNumberOfSmarties = smarties % kids;

console.log(`Each of kids gets ${eachOfThemGets} smarties.`);

console.log(`Me as a dad get ${meGetNumberOfSmarties} smarties.`);

/* how to open a window in console 
type: window.location ex. window.location = `https://${0.1 + 0.2}.com`;
*/

/////////////////// OBJECTS /////////////////////////

const person = {
  first:'Jedrzej',
  last:'Paulus',
  age: 35
}; // the very first object made by me to understand the object syntax

const podcasterEquipment = {

  first: 'idea',
  second: 'technicalities',
  third: 'guests'
};


//////////////////  undefined ///////////////////

let dog;
console.log (dog); /// undefined

let theUndefined; //// the undefined is not set
const theNull = null; /// the null is empty, but set


///////////Booleans: only true or false //////

//let isDown = false;

const herAge = 18;

const myAge = herAge >19;

console.log(myAge);



// one equal for variables
// two equals are checking value
// triple equals are checking the vaule and type