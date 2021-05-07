import { whoWon, youHave, compThrow } from "./utils.js";

// import functions and grab DOM elements
const btn = document.querySelector('#shoot-btn');
const results = document.querySelector('#current-result');

const btnR = document.querySelector('#reset-btn');

// initialize state
const choice = ['rock', 'paper', 'scissors'];
let wins = 0;
let ties = 0;
let totalGuess = 0;
let resetsTot = 0;
// set event listeners to update state and DOM
btn.addEventListener('click', () => {
    //get right guess
    const compChoice = compThrow(choice);
    //get guess
    const selectedRadio = document.querySelector('input:checked');
    const userGuess = selectedRadio.value;
    //get winner
    const winner = whoWon(userGuess, compChoice);
    if (winner === 1) {
        wins++;
        results.textContent = 'you won!';
    } else if (winner === 0) {
        ties++;
        results.textContent = 'you tied!';
    } else {
        results.textContent = 'you lost!';
    }
    totalGuess++;
    //update DOM
    youHave(totalGuess, ties, wins, resetsTot);
});

btnR.addEventListener('click', () => {
    totalGuess = 0;
    ties = 0;
    wins = 0;
    resetsTot++;
    youHave(totalGuess, ties, wins, resetsTot);
    
    let selectedRadio = document.querySelector('#rock');
    selectedRadio.checked = false;
    let pRadio = document.querySelector('#paper');
    pRadio.checked = false;
    let sRadio = document.querySelector('#scissors');
    sRadio.checked = false;
});
