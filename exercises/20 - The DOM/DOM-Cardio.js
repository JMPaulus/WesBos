// Make a div
const div = document.createElement('div');
div.textContent = 'A div added from JS file';

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);
// console.log(div);
// make an unordered list

const list = document.createElement('ul');
document.body.appendChild(list);
console.log(list);

// add three list items with the words "one, two three" in them
const li = document.createElement('li');
li.textContent = 'One';
list.appendChild(li);

const li2 = li.cloneNode(true);
li2.textContent = 'Two';
list.appendChild(li2);

const li3 = li.cloneNode(true);
li3.textContent = 'Three';
list.appendChild(li3);

// put that list into the above wrapper

div.insertAdjacentElement('afterbegin', list);
// create an image
const pic = document.createElement('img');

// set the source to an image
pic.src =
  'https://app.podigee.com/assets/podigee-logo-text-c3e62b8ce06f337f4b9e6b4da0b952fd8ff7593608a106995bb5bd1a487c7ff1.svg';

// set the width to 250
pic.width = 250;
pic.height = 250;
// add a class of cute
pic.classList = 'cute';
// add an alt of Cute Puppy
pic.alt = 'Podigee logo';
// Append that image to the wrapper
div.appendChild(pic);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div>
    <p>A</p>
    <p>B</p>
</div>`;
const ulElement = div.querySelector('ul');
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// document.body.appendChild(myHTML);
// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
