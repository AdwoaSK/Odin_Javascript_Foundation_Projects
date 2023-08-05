// Declaring getComputerChoice function that randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let choiceLength = choice.length;
    // console.log('Length', choiceLength);
    let result = choice[Math.floor(Math.random() * choiceLength)];
    return result;
}

let playerScore = 0;
let computerScore = 0;

// Declare a function that plays a single round of the game and contains two parameter- the playerSelection and computerSelection. 
function playRound(playerSelection, computerSelection) {
    // playerSelection should be case-insensitive (so users can input rock, ROCK, RocK or any other variation)
    let upperFirstLetter = playerSelection.charAt(0).toUpperCase();
    let otherLetters = playerSelection.slice(1);
    playerSelection = upperFirstLetter + otherLetters;
    if (playerSelection == 'Rock' || 'Paper' || 'Scissors') {
        console.log('Player selection:', playerSelection);
        console.log('Computer selection:', computerSelection);
        // Return a string that declares the winner of the round like so: 'You lose! Paper beats Rocks'
        if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
            (playerSelection == 'Scissors' && computerSelection == 'Paper') || 
            (playerSelection == 'Paper' && computerSelection == 'Rocks')) {
            console.log('You Win! ' + playerSelection + ' beats ' + computerSelection + '!');
            return playerScore += 1;
        } else if (playerSelection == computerSelection) {
            console.log('It is a tie!');
        } else {
            console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
            return computerScore += 1;
        }
    } else {
        console.log('Please ONLY choose between Rock, Paper, or Scissors.')
    }  
}
// Write a NEW function called game() and use playRound as the parameter. 
function game() {
    // Play a 5 round game that keeps score and reports a winner or loser at the end.
    for (i=1; i<=5; i++){
        const computerSelection = getComputerChoice();
        // const playerSelection = 'Rock'
        const playerSelection = prompt('Choose either Rock, Paper, or Scissors');
        playRound(playerSelection, computerSelection);
        let currentScore = `Computer: ${computerScore} Player: ${playerScore}`;
        console.log('CURRENT SCORE =>', currentScore, '\n');
    }
    if (playerScore > computerScore) {
        return 'Congratulations! You are the Winner!';
    } else if (playerScore == computerScore) {
            return 'It is a tie!'
    } else {
        return 'Sorry, you lost the game.'
    }
}
console.log(game())
