import Trash from './trash-bin.png';

const addList = document.getElementById('add-list');
const newList = document.getElementById('new-list');

// to create a class
class Tasks {
  constructor() {
    this.array = [];
  }
}

const collection = new Tasks();

const addItem = () => {
  if (localStorage.Tasks) {
    collection.array = JSON.parse(localStorage.Tasks);
  }
};

// to remove item
const removeData = () => {
  for (let i = 0; i < collection.array.length; i += 1) {
    const remove = document.getElementById(`remove${i}`);
    const descriptionName = collection.array[i].description;
    const deleteItem = document.getElementById(`item${i}`);
    // to add filter
    remove.addEventListener('click', () => {
      const filtered = collection.array.filter(
        (Tasks) => Tasks.description !== descriptionName,
      );
      const stringData = JSON.stringify(filtered);
      localStorage.setItem('Tasks', stringData);
      deleteItem.remove();
      window.location.reload();
    });
  }
};

// to update index
const updateIndex = () => {
  collection.array.forEach((todos, index) => {
    todos.index = index;
  });
  const stringData = JSON.stringify(collection.array);
  localStorage.setItem('Tasks', stringData);
};

const updateTask = () => {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('change', () => {
      collection.array[i].description = list[i].value;
      const stringData = JSON.stringify(collection.array);
      localStorage.setItem('Tasks', stringData);
      window.location.reload();
    });
  }
};

// to add checkbox
const clearStorage = () => {
  for (let i = 0; i < collection.array.length; i += 1) {
    const checkbox = document.getElementById(`box${i}`);
    checkbox.addEventListener('change', () => {
      if (collection.array[i].complete === false) {
        collection.array[i].complete = true;
        localStorage.setItem('Tasks', JSON.stringify(collection.array));

        const list = document.getElementById(`list${i}`);
        list.style.textDecoration = 'line-through';
      } else if (collection.array[i].complete === true) {
        collection.array[i].complete = false;
        localStorage.setItem('Tasks', JSON.stringify(collection.array));

        const lists = document.getElementById(`list${i}`);
        lists.style.textDecoration = 'none';
      }
    });
  }
};

// to clear all checked items
const clearAllComplete = () => {
  const clear = document.getElementById('clrBtn');
  clear.addEventListener('click', () => {
    for (let i = 0; i < collection.array.length; i += 1) {
      if (collection.array[i].complete) {
        const markedItem = document.getElementById(`item${i}`);
        markedItem.remove();
      }
    }
    collection.array = collection.array.filter(
      (items) => items.complete === false,
    );
    const stringData = JSON.stringify(collection.array);
    localStorage.setItem('Tasks', stringData);
    const remove = document.querySelector('.trashIcon');
    remove.style.display = 'none';

    updateTask();
    updateIndex();
    window.location.reload();
  });
};

// to display
const display = () => {
  if (localStorage.Tasks) {
    for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
      const div = document.createElement('div');

      const todo = document.createElement('div');
      todo.className = 'myTasks';
      todo.id = `item${i}`;

      // to create checkbox
      const newCheck = document.createElement('input');
      newCheck.setAttribute('type', 'checkbox');
      newCheck.setAttribute('id', `box${i}`);

      const checkStatus = JSON.parse(localStorage.Tasks)[i].complete;
      if (checkStatus) {
        newCheck.checked = true;
      }

      todo.appendChild(newCheck);

      // to create label
      const newLabel = document.createElement('input');
      newLabel.setAttribute('type', 'text');
      newLabel.className = 'list';
      newLabel.id = `list${i}`;
      if (checkStatus) {
        newLabel.style.textDecoration = 'line-through';
      }
      newLabel.value = JSON.parse(localStorage.Tasks)[i].description;
      todo.appendChild(newLabel);

      // to create line break
      const lineBreak = document.createElement('br');
      todo.appendChild(lineBreak);

      // to get the trash,
      const trashIcon = new Image();
      trashIcon.className = 'trashIcon';
      trashIcon.id = `remove${i}`;
      trashIcon.src = Trash;
      div.appendChild(trashIcon);

      todo.appendChild(div);
      newList.appendChild(todo);
    }
  }
};

export {
  Tasks, collection, removeData, updateIndex, updateTask,
  clearStorage, clearAllComplete, display, addList, addItem,
};
