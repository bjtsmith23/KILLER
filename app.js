const button = document.getElementById('button');
const button2 = document.getElementById('button2');

const maxPlayerCount = 8;
let playerCount;
let playerDropdown = document.createElement('select');
let numberDropdown = document.createElement('select');

const firstEl = document.getElementById('first');
const secondEl = document.getElementById('second');
const thirdEl = document.getElementById('third');



for (let i = 0; i <= maxPlayerCount; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    playerDropdown.appendChild(option);
}

firstEl.appendChild(playerDropdown);

const menu = document.getElementById('menu');
const playerVal = menu;


function start() {
    playerCount = playerDropdown.value;
    firstEl.classList.add('hide');
    secondEl.classList.toggle('hide');
    for (let i = 0; i < playerCount; i++) {
        const divEl = document.createElement('div');
        const inputEl = document.createElement('input');
        for (let i = 0; i <= 20; i++){
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            numberDropdown.appendChild(option);
        }
        divEl.appendChild(inputEl);
        divEl.appendChild(numberDropdown);
        secondEl.appendChild(divEl);
    }
}

function startGame() {
    secondEl.classList.toggle('hide');
    thirdEl.classList.toggle('hide');

}

button.addEventListener('click', start);
button2.addEventListener('click', startGame);
