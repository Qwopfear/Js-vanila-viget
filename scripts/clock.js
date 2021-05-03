const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');


function getTime(){
    const d = new Date();
    const h = d.getHours();
    const min = d.getMinutes();
    clockTitle.innerHTML = `${h < 10 ? '0' + h : h}:${min < 10 ? '0' + min : min}`;
}


function init(){

    getTime();
    setInterval(getTime,1000);

};

init();

