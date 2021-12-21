const colors = ['green','orange','rgba(133,122,200)','#f43254'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click',() => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});