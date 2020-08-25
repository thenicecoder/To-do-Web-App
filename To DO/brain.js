const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


btn.addEventListener('click', addTodo);

list.addEventListener('click', deltodo);

function addTodo(event) {

    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const donebtn = document.createElement('button');

    donebtn.innerHTML = '<i class="fas fa-check"></i>';
    donebtn.classList.add('donebtn');
    todoDiv.appendChild(donebtn);

    const newtodo = document.createElement('li');
    newtodo.classList.add('newtodo');
    newtodo.innerText = input.value;


    todoDiv.appendChild(newtodo);



    const delbtn = document.createElement('button');

    delbtn.innerHTML = '<i class="fas fa-trash"></i>';
    delbtn.classList.add('delbtn');
    todoDiv.appendChild(delbtn);

    list.appendChild(todoDiv);

    input.value = '';

}


function deltodo(e) {

    const item = e.target;

    if (item.classList[0] === "delbtn") {
        const task = item.parentElement;

        task.classList.toggle('delanimation');
        task.addEventListener('transitionend', function() { task.remove(); });
    }
    if (item.classList[0] === "donebtn") {
        const task = item.parentElement;
        task.classList.toggle('completed');
    }


}