function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    const title = newToDoText.value;

    // create a new li
    const newLi = document.createElement('li');

    // create a new input
    const checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<span>Delete<span>';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
