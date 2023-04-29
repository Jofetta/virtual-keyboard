import {keys} from './keys.js';


const body = document.querySelector('body');

let container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

let heading = document.createElement('h1');
heading.className = 'heading';
heading.innerText = 'RSS Virtual Keyboard';
container.appendChild(heading);

let textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('rows', '15');
container.appendChild(textarea);

let keyboardHolder = document.createElement('div');
keyboardHolder.className = 'keyboard';
container.appendChild(keyboardHolder);


keys.forEach(keyRows => {

let keyRow = document.createElement('div');
keyRow.className = 'key-row';
keyboardHolder.appendChild(keyRow);
keyRows.forEach(row => {
let keyBox = document.createElement('div');
keyBox.className = 'key';
keyBox.innerText = row.eng;
keyRow.appendChild(keyBox);
})

})

keyboardHolder.lastElementChild.childNodes[3].className = 'key extended';