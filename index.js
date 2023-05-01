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
keyBox.id = row.keycode;
if (row.tag === 'special'){
keyBox.className = 'key special'}
keyBox.innerText = row.eng;
keyRow.appendChild(keyBox);
})

})

keyboardHolder.lastElementChild.childNodes[3].className = 'key extended';


let textAreaText = '';

keyboardHolder.addEventListener('click', e => {

if (e.target.className === 'key' && e.target.className !== 'key special'){
textAreaText += e.target.innerText;
} else if (e.target.className === 'key extended'){
textAreaText += ' ';
} else if (e.target.className === 'key special'){
if (e.target.innerText === 'Tab'){
textAreaText += '    ';
} else if (e.target.innerText === 'Backspace'){
textAreaText = textAreaText.slice(0, -1)
} 
}
textarea.innerText = textAreaText;
})
document.addEventListener('keydown', function(e){
let keyBoxActive = document.getElementById(`${e.code}`);
keyBoxActive.classList.add('key-active');
keyBoxActive.addEventListener('animationend', () => {
keyBoxActive.classList.remove('key-active');
}) 
})

