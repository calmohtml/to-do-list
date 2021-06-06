const form = document.querySelector("#form");
const input = form.querySelector("input");
const button = form.querySelector("button");
const errorMessage = form.querySelector("#errorMessage");
const list = document.querySelector("#list");
const number = document.querySelector("#number");
let counter = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputText = input.value.trim();

  if (inputText == "") {
    errorMessage.innerText = "Poné algo";
    errorMessage.classList.add("error");
    input.classList.add("error");
  } else if (inputText.length < 3) {
    errorMessage.innerText = "Escribí más de 3 caracteres";
    errorMessage.classList.add("error");
    input.classList.add("error");
  } else {
    errorMessage.innerText = "";
    input.classList.remove("error");
    toDoGenerator(inputText);
    form.reset();
    number.innerHTML = counter += 1;
  }
});

const toDoGenerator = (text) => {
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="todo__container">
      <div class="todo">
        <button class="setActive"></button>
          <input
            type="text"
            id="input"
            class="input"
            placeholder=${text}
            disabled
          />
        <button class="removeToDo">
          <img src="./images/icon-cross.svg" alt="">
        </button>
      </div>
    </li>`
  );
  setButtonsBehavor();
};

const setButtonsBehavor = () => {
  const activeButtons = document.querySelectorAll(".setActive");
  const removeButtons = document.querySelectorAll(".removeToDo");
  const todoItem = document.querySelector(".todo__container");

  activeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //button.innerText = ":D";
      let parent = button.parentElement;
      button.classList.add("toDoCompleted");
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let parent = button.parentElement;
      parent.remove();
      todoItem.remove();
    });
  });
};
