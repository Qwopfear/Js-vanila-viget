const form = document.querySelector('.js-form'),
     input = form.querySelector('input'),
     greetings = document.querySelector('.js-greetings'),
     date = new Date(),
     h = date.getHours();
const USER_LS = 'currentUsername',
      SHOWING_CN = 'showing';
      


function askUsername(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', submitHandler);
};

function submitHandler(event){
    event.preventDefault();
    const inputValue = input.value;
    showGreetings(inputValue);
    saveUsername(inputValue);
};

function saveUsername(text){
    localStorage.setItem(USER_LS, text);
}
 


function showGreetings(text){
    if (h > 6 && h < 12){
        greetings.innerText = `Good morning, ${text}.`;
    } else if (h > 11 && h < 17) {
        greetings.innerText = `Good affternoon , ${text}.`;
    } else if (h > 16 && h < 18){
        greetings.innerText = `Is's time for break on tea, ${text}`;
    }else if (h > 17 && h < 24){
        greetings.innerText = `Good evening , ${text}.`;
    }else { 
        greetings.innerText = `Good night , ${text}.`;
    }
    greetings.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
};


function loadUsername(){
    const currentUsername = localStorage.getItem(USER_LS);
    if (currentUsername === null){
        askUsername();
    }else {
        showGreetings(currentUsername);
    };
};


function init(){
    loadUsername();
};


init();