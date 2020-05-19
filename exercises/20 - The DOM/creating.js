console.log('Creating is OK, plugged in');

const newParagraph = document.createElement('p');
newParagraph.textContent = 'I am a P like paragraph';
newParagraph.classList.add('special');
console.log(newParagraph);

// const imageToAdd = document.createElement('img');
// imageToAdd.src = 'https://picsum.photos/500';
// imageToAdd.alt = 'Image added from JS';
// console.log(imageToAdd);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

//how to add an element to the DOM

document.body.appendChild(newParagraph); //grab an element from the JS file and put it to the element in DOM
//document.body.appendChild(imageToAdd);

// const newImage = document.createElement('img');
// newImage.src = 'https://picsum.photos/300';
// newImage.alt = 'Another random image';
// document.body.appendChild(newImage);
//console.log(newImage);

const photo = document.createElement('img');
photo.src = 'https://pyrcaster.pl/wp-content/uploads/2020/02/pyr19_222.png.webp';
photo.alt = 'Pyrcaster image';
// document.body.appendChild(photo);
// console.log(photo);

const photo2 = document.createElement('img');
photo2.src = 'https://app.podigee.com/assets/podigee-logo-text-c3e62b8ce06f337f4b9e6b4da0b952fd8ff7593608a106995bb5bd1a487c7ff1.svg';
photo2.alt = 'Podigee logo';
//document.body.appendChild(photo2);
// console.log(photo2); // reflow, that is not needed

const newDiv = document.createElement('div');
newDiv.alt = 'div added from newDiv';
console.log(newDiv);

newDiv.appendChild(photo);
newDiv.appendChild(photo2);
document.body.appendChild(newDiv);

// how to add something to the earlier element

const heading = document.createElement('h2');
heading.textContent = 'Thing before, but added from the bottom of code block';

newDiv.insertAdjacentElement('beforebegin', heading); //before - will make thing before the element I add

// <ul>
//     <li>One</li>
//     <li>Two</li>
//     <li>Three</li>
//     <li>Four</li>
//     <li>Five</li>
// </ul>

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'four';
list.appendChild(li5); // will do a loop soon

const li2 = li5.cloneNode(true);
li2.textContent = 'two';
list.insertAdjacentElement('afterbegin', li2); // cloning the node

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1); 

const li0 = li5.cloneNode(true);
li0.textContent = 'zero';
list.insertAdjacentElement('afterbegin', li0);