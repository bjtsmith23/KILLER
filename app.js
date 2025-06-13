const button = document.getElementById('button');
const button2 = document.getElementById('button2');

const maxPlayerCount = 8;
let playerCount;
let playerDropdown = document.createElement('select');

const firstEl = document.getElementById('first');
const secondEl = document.getElementById('second');
const thirdEl = document.getElementById('third');



for (let i = 1; i <= maxPlayerCount; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    playerDropdown.appendChild(option);
}

firstEl.appendChild(playerDropdown);

const playerVal = document.getElementById('menu');




function start() {
    const playerCount = parseInt(playerDropdown.value, 10);
    // const button2 = document.createElement('button');

    firstEl.classList.add('hide');
    secondEl.classList.toggle('hide');
    for (let i = 0; i < playerCount; i++) {
        const divEl = document.createElement('div');
        const inputEl = document.createElement('input');
        let numberDropdown = document.createElement('select');
        for (let j = 1; j <= 20; j++){
            const option = document.createElement('option');
            option.value = j;
            option.textContent = j;
            numberDropdown.appendChild(option);
        }
        // button2 = document.classList.add('button2');
        // button2.innerHTML = 'Add Player';

        divEl.appendChild(inputEl);
        divEl.appendChild(numberDropdown);
        secondEl.appendChild(divEl);
        // secondEl.appendChild(button2);
    }
}

function startGame() {
    secondEl.classList.toggle('hide');
    thirdEl.classList.toggle('hide');

}

button.addEventListener('click', start);
// button2.addEventListener('click', startGame);
