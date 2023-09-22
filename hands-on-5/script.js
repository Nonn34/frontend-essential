// * 01. get element id

// * 02. add new tasks

// * 02.01 append child

// * 02.02 Prevent Default

// * 03. event - toggle clicking - cross-out the unlisted

// ! 04. event - toggle clicking - tick yes sign as completed

// ! 05. event - toggle clicking - tick x to remove the unlisted

// * 06. add const main function

// * 07. document.addEventListener

const main = () => {
  const inputBox = document.getElementById("typeyourlist");
  const pressButton = document.getElementById("addmorelist");
  const allLists = document.getElementById("existlist");

  pressButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newTodo = document.createElement("li");

    if (!inputBox.value) {
      alert("Please input something!");
      return;
    }

    newTodo.textContent = inputBox.value;
    allLists.appendChild(newTodo);

    inputBox.value = "";
  });

  allLists.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
