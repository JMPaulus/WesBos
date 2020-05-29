console.log('It works');

const JJ = document.querySelector('.JJ');
console.log(JJ.children); // element
console.log(JJ.childNodes); // node
console.log(JJ.firstElementChild);
console.log(JJ.lastElementChild);
console.log(JJ.previousElementSibling);
console.log(JJ.nextElementSibling);
console.log(JJ.parentElement); 

const paragraph = document.createElement('p'); //create element
paragraph.textContent = 'This is what I will remove'; // add a text content to the element
document.body.appendChild(paragraph); // added to html

paragraph.remove(); // created and removed using JS