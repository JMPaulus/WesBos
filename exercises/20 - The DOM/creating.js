console.log('Creating is OK, plugged in');

const newParagraph = document.createElement('p');
newParagraph.textContent = 'I am a P like paragraph';
newParagraph.classList.add('special');
console.log(newParagraph);

const imageToAdd = document.createElement('img');
imageToAdd.src = 'https://picsum.photos/500';
imageToAdd.alt = 'Image added from JS';
console.log(imageToAdd);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

//how to add an element to the DOM

document.body.appendChild(newParagraph); //grab an element from the JS file and put it to the element in DOM
document.body.appendChild(imageToAdd);
