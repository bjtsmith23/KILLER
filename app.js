// BUTTONS
const button = document.getElementById('button');
const button2 = document.getElementById('button2');

// VARIABLES
const maxPlayerCount = 8;
let playerCount;
let playerNames = [];
let playerDropdown = document.createElement('select');

// ELEMENTS
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





const playerInputs = []; // Array to store player names

function start() {
    const playerCount = parseInt(playerDropdown.value, 10);
    // button2.innerHTML = 'Add Player';

    firstEl.classList.add('hide');
    secondEl.classList.toggle('hide');

    for (let i = 0; i < playerCount; i++) {
        const divEl = document.createElement('div');
        const inputEl = document.createElement('input');
        inputEl.classList.add(`player${i + 1}`);
        inputEl.setAttribute('placeholder', `Player ${i + 1} Name`);
        
        let numberDropdown = document.createElement('select');
        for (let j = 1; j <= 20; j++) {
            const option = document.createElement('option');
            option.value = j;
            option.textContent = j;
            numberDropdown.appendChild(option);
        }

        divEl.appendChild(inputEl);
        divEl.appendChild(numberDropdown);
        secondEl.appendChild(divEl);

        // Store input elements for later use
        playerInputs.push(inputEl);
    }

    secondEl.appendChild(button2);
    // button2.addEventListener('click', storePlayerNames);

}

function storePlayerNames() {
    secondEl.classList.toggle('hide');
    thirdEl.classList.toggle('hide');
    const playerNames = playerInputs.map(input => input.value.trim());
    console.log(playerNames); // Output the array to check values
    console.log(playerNames.length); 
    for ( let i = 0; i < playerNames.length; i++){

        const div = document.createElement('div');
        

        const minusBtn = document.createElement('button');
        minusBtn.innerHTML = '-';

        const nameDiv = document.createElement('div');
        nameDiv.innerHTML = playerNames[i];

        const plusBtn = document.createElement('button');
        plusBtn.innerHTML = '+';

        const scoreDiv = document.createElement('div');
        scoreDiv.innerHTML = '   '

        div.appendChild(minusBtn);
        div.appendChild(nameDiv)
        div.appendChild(plusBtn);
        div.appendChild(scoreDiv);
        div.classList.add('d-flex');
        div.classList.add('borders');
        thirdEl.appendChild(div);
    }
}


button.addEventListener('click', start);
button2.addEventListener('click', storePlayerNames);





