export function whoWon(user, comp) {
    if (user === 'rock' && comp === 'scissors' ||
        user === 'paper' && comp === 'rock' ||
        user === 'scissors' && comp === 'paper') {
        return 1;
    } else if (user === comp) {
        return 0;
    } else {
        return -1;
    }
}

export function youHave(totalGuess, ties, wins, resetsTot){
    const resetDiv = document.querySelector('#total-reset');
    const winDiv = document.querySelector('#total-wins');
    const lossDiv = document.querySelector('#total-losses');
    const tiesDiv = document.querySelector('#total-ties');
    winDiv.textContent = `You won this many times: ${wins}`;
    lossDiv.textContent = `You lost this many times: ${totalGuess - wins}`;
    tiesDiv.textContent = `You have tied this many times: ${ties}`;
    resetDiv.textContent = `You have reset this many times: ${resetsTot}`;

}

//use an array
export function compThrow(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}