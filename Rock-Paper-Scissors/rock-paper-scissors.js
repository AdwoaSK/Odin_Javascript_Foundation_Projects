let playerScore = 0,
    computerScore = 0,
    roundsPlayed = 0,
    choice = ['Rock', 'Paper', 'Scissors'];

// Declaring getComputerChoice function that randomly returns 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    let choiceLength = choice.length,
        result = choice[Math.floor(Math.random() * choiceLength)];
    return result;
}

// playerSelection should be case-insensitive (so users can input rock, ROCK, RocK or any other variation)
function capitalisedFirstLetter() {
    // let word = 'rock';
    let word = prompt("Please choose either Rock, Paper, or Scissors"),
        upperFirstLetter = word.charAt(0).toUpperCase(),
        otherLetters = word.slice(1);

    word = upperFirstLetter + otherLetters;
    return word;
}

/**
 * Declare a function that plays a single round of the game and contains two parameter
 * which are the playerSelection and computerSelection.
 */
function playRound(playerSelection, computerSelection) {
    if (choice.indexOf(playerSelection) == -1) {
        do {
            console.log(playerSelection);
            console.log('You can ONLY choose between Rock, Paper, and Scissors.\n');
            playerSelection = capitalisedFirstLetter();
        }
        while (choice.indexOf(playerSelection) == -1)
    }
    // Return a string that declares the winner of the round like so: 'You lose! Paper beats Rocks'
    console.log('Player selection:', playerSelection);
    console.log('Computer selection:', computerSelection);
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
    (playerSelection == 'Scissors' && computerSelection == 'Paper') || 
    (playerSelection == 'Paper' && computerSelection == 'Rocks')) {
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection + '!');
        return playerScore += 1;
    } else if (playerSelection == computerSelection) {
        console.log('It\'s a tie!');
    } else {
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
        return computerScore += 1;
    }    
}

// Write a NEW function called game() and use playRound as the parameter. 
function game() {
    // Play a 5 round game that keeps score and reports a winner or loser at the end.
    while (playerScore < 5 && computerScore < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = capitalisedFirstLetter();
        playRound(playerSelection, computerSelection);
        let currentScore = `Computer: ${computerScore} Player: ${playerScore}`;
        console.log('CURRENT SCORE =>', currentScore);
        roundsPlayed += 1;
        console.log('Rounds Played: ' + roundsPlayed + '\n');
    }
    if (playerScore == 5) {
        return 'Congratulations! You are the Winner!';
    } else {
        return 'Sorry, you lost the game.'
    }   
}
console.log(game());