const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});


// Console Methods
people.forEach((person, index) => {
  if(person.name === 'Wes') {
    console.log('Another name');
  }
});

// console.error

people.forEach((person, index) => {
  if (person.name === 'Wes') {
    console.error('This is how console.error looks like');
  }
});

// console.warn

people.forEach((person, index) => {
  if (person.name === 'Wes') {
    console.warn('This is how console.error looks like');
  }
});

// console.table
console.table(people);
console.log('This is how console.table looks like');

// console.count how many times do I run this function

function helloDoc(name) {
  console.count('how many times do I run this function?');
  return `Dr. ${name}`;
}

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
