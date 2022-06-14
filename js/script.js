const input = document.querySelector(".tudo_list_form_input");
const addBtn = document.querySelector(".tudo_list_form_button");
const listContainer = document.querySelector(".tudo_list__items__ul");

addBtn.addEventListener("click", crateTodo);
function setIvenlisen() {
  const deleteBtn = document.querySelector(".tudo_list__items__row__button");

  const deleteBtn = document.querySelector(".tudo_list__items__row__button--add");
  
  deleteBtn.addEventListener("click", crateTodo);
}
function crateTodo() {
  if (input.value.length < 3) {
    return alert("miqich erkar ban gri");
  }
  listContainer.innerHTML += `
  <li class="tudo_list__items__row">
  <span class="tudo_list__items__row__content">${input.value}</span>
  <div>
    <button class="tudo_list__items__row__button--add">add</button>
    <button class="tudo_list__items__row__button">X</button>
  </div>
</li>
  `;
  input.value = "";

  setIvenlisen();
}
