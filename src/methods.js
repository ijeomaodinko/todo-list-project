import Ve from './ve.png';
import Trash from './trash-bin.png';
import Edit from './edit.png';

// to declare variables
const addList = document.getElementById('add-list');
const newList = document.getElementById('new-list');

// to create a class
class Tasks {
  constructor() {
    this.array = [];
  }
}

// to display items add page
const display = () => {
  if (localStorage.Tasks) {
    for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
      // to create a div element to store form inputs
      const div = document.createElement('div');

      const todo = document.createElement('div');
      todo.id = `item${i}`;

      // to create checkbox
      const newCheck = document.createElement('input');
      newCheck.setAttribute('type', 'checkbox');
      newCheck.setAttribute('id', `${i}`);
      todo.appendChild(newCheck);

      // to create label
      const newLabel = document.createElement('input');
      newLabel.setAttribute('type', 'text');
      newLabel.className = 'list';
      newLabel.id = `list${i}`;
      newLabel.value = JSON.parse(localStorage.Tasks)[i].description;
      todo.appendChild(newLabel);

      // to  create and line break
      const lineBreak = document.createElement('br');
      todo.appendChild(lineBreak);

      const editIcon = new Image();
      editIcon.className = 'iconEdit';
      editIcon.id = `edit${i}`;
      editIcon.src = Edit;
      div.appendChild(editIcon);

      const line = document.createElement('hr');
      todo.appendChild(line);

      const trashIcon = new Image();
      trashIcon.className = 'trashIcon';
      trashIcon.id = `remove${i}`;
      trashIcon.src = Trash;
      div.appendChild(trashIcon);

      const veIcon = new Image();
      veIcon.className = 'icon';
      veIcon.id = `icon${i}`;
      veIcon.src = Ve;
      div.appendChild(veIcon);
      todo.appendChild(div);

      newList.appendChild(todo);
      newList.appendChild(div);
    }
  }
};
export { Tasks, display, addList };