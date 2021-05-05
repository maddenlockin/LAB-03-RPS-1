export function whoWon (user, comp){
    if(user === 'rock' && comp === 'scissors' ||
     user === 'paper' && comp === 'rock'|| 
     user === 'scissors' && comp === 'paper' ) {
        return 1;
    } else if (user === comp){
        return 0;
    } else {
        return -1;
    }
}