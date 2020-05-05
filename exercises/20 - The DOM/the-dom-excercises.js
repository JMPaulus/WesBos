const paragraph = document.querySelector('p');
console.log(paragraph);

const image = document.querySelector('img');
console.log(image);

const changeText = document.getElementsByClassName('parag');
console.log(changeText);
changeText.textContent = 'This is text that was changed in the console'; // changed in console

const newText = document.querySelector('p')
newText.textContent = 'This is a text that I changed';
