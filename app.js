import { whoWon, compThrow } from "./utils.js";

// import functions and grab DOM elements
const btn = document.querySelector('#shoot-btn');
const winDiv = document.querySelector('#total-wins');
const lossDiv = document.querySelector('#total-losses');
const results = document.querySelector('#current-result');
const tiesDiv = document.querySelector('#total-ties');
const resetDiv = document.querySelector('#total-reset');
const btnR = document.querySelector('#reset-btn');

console.log(tiesDiv);
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
    if (winner === 1){
        wins++;
        results.textContent = 'you won!';
    } else if (winner === 0){
        ties++;
        results.textContent = 'you tied!';
    } else {
        results.textContent = 'you lost!';
    }
    totalGuess++;
    //update DOM
    winDiv.textContent = `You won this many times: ${wins}`;
    lossDiv.textContent = `You lost this many times: ${totalGuess - wins}`;
    tiesDiv.textContent = `You have tied this many times: ${ties}`;
    resetDiv.textContent = `You have reset this many times: ${resetsTot}`;
});

btnR.addEventListener('click', () =>{
    totalGuess = 0;
    ties = 0;
    wins = 0;
    resetsTot++;
    winDiv.textContent = `You won this many times: ${wins}`;
    lossDiv.textContent = `You lost this many times: ${totalGuess - wins}`;
    tiesDiv.textContent = `You have tied this many times: ${ties}`;
    resetDiv.textContent = `You have reset this many times: ${resetsTot}`;
});