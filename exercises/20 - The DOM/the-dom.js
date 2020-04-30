const div = document.querySelectorAll('div'); // to choose every div in the DOM
console.log(div);

const p = document.querySelector('p');
console.log(p);

const niceCool = document.getElementsByClassName('nice cool'); // select specific element with class name in brackets
console.log(niceCool);

const className = document.getElementsByClassName('custom');
console.log(className);

const allArticles = document.querySelectorAll('article');
console.log(allArticles);

const heading = document.querySelector('h2');
heading.textContent = 'I am a cool guy';

console.dir(heading.textContent);

const item = document.getElementsByClassName('item');
console.log(item);

const paragraph = document.querySelector('p');
paragraph.textContent = 'I am a moose';
console.log(paragraph);
function changeText() {
  document.querySelector('p').innerHTML('I am a mouse');
}

const pizza = document.querySelector('.pizza');
console.log(pizza.textContent);

pizza.textContent = `${pizza.textContent} + another pizza+ 🍕`;
