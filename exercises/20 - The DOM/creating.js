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

const newImage = document.createElement('img');
newImage.src = 'https://picsum.photos/300';
newImage.alt = 'Another random image';
document.body.appendChild(newImage);
console.log(newImage);

const photo = document.createElement('img');
photo.src = 'https://pyrcaster.pl/wp-content/uploads/2020/02/pyr19_222.png.webp';
photo.alt = 'Pyrcaster image';
document.body.appendChild(photo);
