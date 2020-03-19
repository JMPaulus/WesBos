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
