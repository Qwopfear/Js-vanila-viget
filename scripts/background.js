const body = document.querySelector('body');
const IMAGE_NUMBER = 5;


function showBg(number){
    const img = new Image();
    img.src = `./img/${number + 1}.jpg`;
    img.classList.add('bgImage')
    body.appendChild(img);
    console.log(number);
}

function getRandom(){
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number
}


function init(){
    const randomNumber = getRandom();
    showBg(randomNumber);
    
};

init();

setInterval(init, 600000);