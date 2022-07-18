// eslint disable
import './style.css';
import Todos from './classes.js';
import { Tasks, addList, display } from './methods.js';

// to create a todo list collection by instantiating Tasks class
const collection = new Tasks();

// to add local storage and update
if (localStorage.Tasks) {
  collection.array = JSON.parse(localStorage.Tasks);
}

// to add event to add list
addList.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const newTasks = new Todos();
    newTasks.description = addList.value;
    newTasks.complete = false;
    newTasks.index = `${collection.array.length + 1}`;
    collection.array.push(newTasks);
    newTasks.value = ' ';
    const stringData = JSON.stringify(collection.array);
    localStorage.setItem('Tasks', stringData);
    window.location.reload();
  }
});

// to display the todos
display();

// to remove item from collection
for (let i = 0; i < collection.array.length; i += 1) {
  const remove = document.getElementById(`remove${i}`);
  const descriptionName = collection.array[i].description;
  const deleteItem = document.getElementById(`item${i}`);

  remove.addEventListener('click', () => {
    const filtered = collection.array.filter((Tasks) => Tasks.description !== descriptionName);
    const stringData = JSON.stringify(filtered);
    localStorage.setItem('Tasks', stringData);
    deleteItem.remove();
    window.location.reload();
  });
}

// to update index
const updateIndex = () => {
  collection.array.forEach((todos, index) => {
    todos.index = index + 1;
  });
  const stringData = JSON.stringify(collection.array);
  localStorage.setItem('Tasks', stringData);
};
updateIndex();

// to update the localStorage;
const updateTask = () => {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('change', () => {
      collection.array[i].description = list[i].value;
      const stringData = JSON.stringify(collection.array);
      localStorage.setItem('tasks', stringData);
      window.location.reload();
    });
  }
};
updateTask();
export default collection;
