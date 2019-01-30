function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let deleteBtn = document.createElement('button');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    deleteBtn.innerHTML = '<span>Delete<span>';

    deleteBtn.addEventListener('click', event => {

      newLi.remove();

      deleteBtn.remove();
      
      checkbox.remove();
    });
  });
}


window.onload = function() {
  onReady();
};
