// 


const list = document.querySelector('div');


list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "div") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "div") {
       let div = ev.target.parentNode;
       div.remove();
    }
});


const addBtna = document.getElementById('addBtn');

addBtna.onclick = function () {
    let div = document.createElement('div');
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    div.appendChild(t);

    if(inputValue == "") {
       alert("Введите ваше дело!");
    } else {
       document.getElementById('list').appendChild(div);
    }

    document.getElementById('toDoEl').value = "";
    let span = document.createElement('div');
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    div.appendChild(span);
}