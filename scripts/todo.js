const toDoForm = document.querySelector('.js-toDoForm'),
     toDoInput = toDoForm.querySelector('input'),
     toDoList  = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDoArray = [];

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const  parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo){
            showToDo(toDo.name)
        })
    }
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoArray))
}

function submitHandler(event){
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    showToDo(toDoInputValue);
    toDoInput.value = '';
}
function deleteHandler(event){
    //delete from html
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li)
    //delete from LS
    const filtredToDo =  toDoArray.filter(function (toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDoArray = filtredToDo;
    saveToDos()
  
    

}

function showToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDoArray.length + 1;
    li.id = newId;
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', deleteHandler)
    span.innerHTML = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObject = {
        name: text,
        id: newId
    };
    toDoArray.push(toDoObject);
    saveToDos();
};



function init(){
    loadToDos();
    toDoForm.addEventListener('submit', submitHandler);

}


init();