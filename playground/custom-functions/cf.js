// Started from here///////////////////////

console.log('it works');

// Function definition
function calculateMyBill() {
  console.log('Running the function');
  const totalCost = 100 * 1.23;
  console.log(totalCost);
  return totalCost;
}

// Function call or Function run
const myTotal = calculateMyBill();
console.log(myTotal);
console.log(`Your total is ${myTotal} PLN.`);
// Function training
const distance = 600;
const speed = 60;

function time() {
  const calculation = distance / speed;
  return calculation;
}
console.log(time);

const monacoArea = 2.02;
const monacoPopulation = 37550;

function populationDensity() {
  const monacoDensity = monacoPopulation / monacoArea;
  return monacoDensity;
}

console.log(
  `The population density in Monaco is ${monacoPopulation /
    monacoArea} per square kilometer`
);

// another example
// const myTotal = calculateMyBill() already declared above
const bill = 200;
const taxRate = bill * 0.23;
const total = bill * taxRate;

const myTotal2 = calculateMyBill();

console.log(`This is myTotal ${myTotal}, and myTotal2 ${myTotal2}`);

// //////Parameters

function calculateTheBill(billAmount, tax) {
  const totalBill = billAmount * (1 + tax);
  return totalBill;
}

const theTotal = calculateTheBill(100, 0.23);
const theTotal2 = calculateTheBill(200, 0.23);
console.log(`The total when used calculateTheBill is ${theTotal}.
And the total used myTotal 2 is ${theTotal2}.`);

const myTotal3 = calculateTheBill(20 + 20 + 30 + 20, 0.23);

// Scoped function

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Yan Jay');
console.log(greeting);

// another Function. Putting function into function

function doctorize(name) {
  return `Dear doctor ${name}.`;
}

function yellAt(name) {
  return `What are you doing doctor ${name}?`.toUpperCase();
}

// doctorize(yellAt(`Paulus`));

// // Function Definition
// function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
//   // this is the function body
//   console.log('Running Calculate Bill!!');
//   const total = billAmount + billAmount * taxRate + billAmount * tipRate;
//   return total;
// }

// // Function Call. Or **Run**
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// // const myTotal = calculateBill(wesTotal, wesTaxRate);

// // Function Definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// // const greeting = sayHiTo('Wes');
// // console.log(greeting);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name = 'Silly Goose') {
//   return `HEY ${name.toUpperCase()}`;
// }

// const myBill4 = calculateBill(100, undefined, 0.2);
// console.log(myBill4);
