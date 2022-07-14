import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

const toDos = [
  {
    description: 'Go for jugging',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to mass',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to work',
    completed: false,
    index: 3,
  },
];
const listItems = document.querySelector('.new-list');

function displayItems(arr) {
  toDos.sort((a, b) => a.index - b.index);

  for (let i = 0; i < arr.length; i += 1) {
    const divItem = document.createElement('div');
    // divItem.classList.add("view");
    divItem.innerHTML = `<div><input class ="input-list" type="checkbox"> <p class="p">${arr[i].description}</p></div> <i class="fa-regular fa-ellipsis-vertical"></i>`;
    listItems.appendChild(divItem);
  }
}

displayItems(toDos);