import { whoWon } from "./utils.js";

// import functions and grab DOM elements
const btn = document.querySelector('#shoot-btn');
const winDiv = document.querySelector('#total-wins');
const lossDiv = document.querySelector('#total-losses');
const results = document.querySelector('#current-result');
const tiesDiv = document.querySelector('#total-ties');
console.log(tiesDiv);
// initialize state
const choice = ['rock','paper', 'scissors'];
let wins = 0;
let ties = 0;
let totalGuess = 0;
// set event listeners to update state and DOM
btn.addEventListener('click', () => {
    //get right guess
    const compChoice = choice[Math.floor(Math.random()*choice.length)];
    //get guess
    const selectedRadio = document.querySelector('input:checked');
    const userGuess = selectedRadio.value; 
    //get winner
    const winner = whoWon(userGuess, compChoice);
    if(winner === 1){
        wins++;
        results.textContent = 'you guessed won!';
    } else if (winner === 0){
        ties++;
        results.textContent = 'you guessed tied!';
    } else{
        results.textContent = 'you guessed lost!';
    }
    console.log(compChoice);
    totalGuess++;
    //update DOM
    winDiv.textContent = `You won this many times: ${wins}`;
    lossDiv.textContent = `You lost this many times: ${totalGuess - wins}`;
    tiesDiv.textContent = `You have tied this many times: ${ties}`;
})