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
paragraph.textContent = 'I am a moooo';
console.log(paragraph);
function changeText() {
  document.querySelector('p').innerHTML('I am a mouse');
}
console.log(changeText);

const pizza = document.querySelector('.pizza');
console.log(pizza.textContent);

// pizza.textContent = `${pizza.textContent} + another pizza + 🍕`;
pizza.insertAdjacentText('beforeend', 'this is pizza before end 🍕');
pizza.insertAdjacentText('afterbegin', 'this is pizza after begin 🍕');

//Classes

const pic = document.querySelector('.newImage');
pic.classList.add('openClass'); // using a prototype to add a class

console.log(pic.classList);

function toggleRound(){
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'A random photo';
pic.width = 400;
