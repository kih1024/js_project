const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS =  'toDos';

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));//localstorage는 데이터를 string 형태로밖에 저장 못함. JSON.stringify는 오브젝트를 string 형태로 바꿔줌
}

function deleteToDo(event){
    //console.dir로 parentNode 같은 것을 찾는다.
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });//각가의 object 들을 돌려서 참인것들의 array를 리턴, 삭제되지 않은 toDo 들을 리턴한다.
    toDos = cleanToDos;
    saveToDos();
}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌"
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos(){ 
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        const parseToDos = JSON.parse(loadToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
