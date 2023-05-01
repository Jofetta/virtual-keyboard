import {keys} from './keys.js';


const body = document.querySelector('body');

let language = 'eng';

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

function createKeys(){

keyboardHolder.innerHTML = '';
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
keyBox.innerText = row[`${language}`];
keyRow.appendChild(keyBox);
})

})
keyboardHolder.lastElementChild.childNodes[3].className = 'key extended';
}

createKeys();




let textAreaText = '';

keyboardHolder.addEventListener('click', e => {
if (e.target.classList.contains('key')){
e.target.classList.add('key-active');
e.target.addEventListener('animationend', () => {
e.target.classList.remove('key-active');
});
if (e.target.classList.contains('extended')){
textAreaText = textAreaText + ' ';
};
if (!e.target.classList.contains('special')){
textAreaText += e.target.innerText;
} else if (e.target.classList.contains('special')){
if (e.target.innerText === 'Tab'){
textAreaText += '    ';
} else if (e.target.innerText === 'Backspace'){
textAreaText = textAreaText.slice(0, -1)
};
}
}
textarea.innerText = textAreaText;
});


document.addEventListener('keydown', function(e){
let keyBoxActive = document.getElementById(`${e.code}`);
keyBoxActive.classList.add('key-active');
keyBoxActive.addEventListener('animationend', () => {
keyBoxActive.classList.remove('key-active');
}) 
})

let ctrl = document.getElementById('ControlLeft');
let ctrl1 = document.getElementById('ControlRight');
let alt = document.getElementById('AltLeft');
let alt1 = document.getElementById('AltRight');
function changeLanguage() {
if (language === 'eng'){
language = 'ru';
} else language = 'eng';
createKeys();
}

document.addEventListener('keydown', function(e){
if (e.code === 'ControlLeft' || e.code === 'ControlRight'){
alt.addEventListener('click', changeLanguage);
alt1.addEventListener('click', changeLanguage);
document.addEventListener('keydown', (d) => {
if (d.code === 'AltLeft' || d.code === 'AltRight'){
changeLanguage();
};
});
};
});

document.addEventListener('keydown', function(e){
if (e.code === 'AltLeft' || e.code === 'AltRight'){
ctrl.addEventListener('click', changeLanguage);
ctrl1.addEventListener('click', changeLanguage);
document.addEventListener('keydown', (d) => {
if (d.code === 'ControlLeft' || d.code === 'ControlRight'){
changeLanguage();
};
});
};
});
