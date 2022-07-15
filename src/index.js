import './style.css';
import Refresh from './refresh.png';
import Enter from './enter.png';
import Todos from './classes.js';
import {
  collection, removeData, updateIndex, addItem, updateTask,
  clearStorage, clearAllComplete, display, addList,
} from './methods.js';

// to add item
addItem();

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

display();
removeData();
updateIndex();
updateTask();
clearStorage();
clearAllComplete();

const refresher = document.getElementById('div1');
const refresh = new Image();
refresh.src = Refresh;
refresh.id = 'refresh';
refresh.className = 'refresh';
refresher.appendChild(refresh);

const reloadPage = document.querySelector('#refresh');
function reload() {
  window.location.reload();
}
reloadPage.addEventListener('click', reload, false);

// To assign enter to variable
const form = document.getElementById('list');
const enter = new Image();
enter.src = Enter;
enter.className = 'enter';
enter.id = 'enter';
form.appendChild(enter);
