// const button1 = document.querySelector(‘#button1’)
// function barevel() {
//   console.log(this);
// }
// button1.addEventListener(‘click’, function() {
//   // console.log(this)
//   barevel();
// })
// const user = {
//   name: "Alex",
//   lastName: "Simonyan",
//   barevel: function () {

//     console.log(this.lastName)
//   },
//   get fullName() {
//     return this.name + this.lastName
//   }
// }
// console.log(user.fullName);

const button1 = document.querySelector("#button1");

const button2 = document.querySelector(".button2");

// const user = {
//   name: "Alex",
//   lastName: "Simonyan",
//   barevel: function () {
    // console.log(
    //   // 'barevner ' + this.name + ' ' + this.lastName + 'ic'
    //   // `barevner ${this.name} ${this.lastName}ic`

    // )

//     console.log(this.lastName);
//   },
//   get fullName() {
//     return this.name + this.lastName;
//   },
// };

// button1.addEventListener("click", function () {
//   console.log(this);
// });

// button1.addEventListener("click", function (argumes) {
//   console.log(argumes);
// });
// function trnel() {
//   console.log(arguments);
// }
// trnel(1, 2, 2, 4, 5);
// console.log(user.fullName);

// const catkel = function (a, s, w) {
//   console.log(a, s, w);
// };



// const name1 = "Alex";
// const fistNeym = "Asimaoyan";


// const fulNeym = function() {
//    return name1 + fistNeym;
// }

// const fistNeym1 = () => name1 + fistNeym;


// console.log(fistNeym1())





const user = {
  name: "alexs",
  lastName:"smit"
  
}

// const input = document.querySelector(".tudo_list_form_input");
// const addBtn = document.querySelector(".tudo_list_form_button");
// const listContainer = document.querySelector(".tudo_list__items__ul");

// addBtn.addEventListener("click", crateTodo);

// function removeTodo() {
//   const listParent = this.parentElement.parentElement;
//   listContainer.removeChild(listParent);
// }

// function doneTodo() {
//   const listParent = this.parentElement.parentElement;
//   listParent.classList.toggle("done");
// }

// function setActionsEvents() {
//   const deleteBtns = document.querySelectorAll(
//     ".tudo_list__items__row__button--remove"
//   );

//   const doneBtns = document.querySelectorAll(
//     ".tudo_list__items__row__button--done"
//   );

//   deleteBtns.forEach(function (btn) {
//     btn.addEventListener("click", removeTodo);
//   });

//   doneBtns.forEach(function (btn) {
//     btn.addEventListener("click", doneTodo);
//   });
// }

// function crateTodo() {
//   if (input.value.length <= 3) {
//     return alert("miqich erkar ban gri");
//   }
//   listContainer.innerHTML += `
//   <li class="tudo_list__items__row">
//   <span class="tudo_list__items__row__content">${input.value}</span>
//   <div>
//     <button class="tudo_list__items__row__button--done">add</button>
//     <button class="tudo_list__items__row__button--remove">X</button>
//   </div>
// </li>
//   `;
//   input.value = "";

//   setActionsEvents();
// }
