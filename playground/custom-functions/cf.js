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
  `The population density in Monaco is ${monacoPopulation / monacoArea} per square kilometer`
);
