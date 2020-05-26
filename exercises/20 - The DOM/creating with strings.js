console.log('it works');

const article = document.querySelector('.article');

const src = `https://picsum.photos/400`;
const alt = `a random photo from picsum`;
const myHTML = `
<div class = "wrapper">
    <h1>This is ${alt}.
    The picture below is downloaded using const src in JS. And it is different than the picture above.</h1>
    <img src = ${src}>
</div>`;

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);