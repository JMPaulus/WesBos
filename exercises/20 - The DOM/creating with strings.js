console.log('it works');

const article = document.querySelector('.article');

console.log(article.innerHTML);

const src = `https://picsum.photos/400`;
const alt = `a random photo from picsum`;
const myHTML = `
<div classname = "wrapper">
    <h1>This is ${alt} </h1>
</div>`;

article.innerHTML = myHTML;
