function getHumanChoice() {
  // Numbers instead of words for easier input
  let humanChoice = prompt(`Choose by number:\n1 = Rock\n2 = Paper\n3 = Scissors`); 
  
  // Convert numbers to their original words
  if (humanChoice === '1') {
    return 'Rock';
  } else if (humanChoice === '2') {
    return 'Paper';
  } else if (humanChoice === '3') {
    return 'Scissors';
  } else {
    return 'Invalid';
  }
}

function getComputerChoice() {
  let randomNum = Math.random(); // Random numbers from 0 to 0.99...

  // Dividing the numbers into three roughly equal possibilities
  let computerChoice = (randomNum < 0.33) ? 'Rock'
  : (randomNum > 0.66) ? 'Scissors'
  : 'Paper';

  return computerChoice;
}

// The score before the game begins
let humanScore = 0;
let computerScore = 0;

// One-Round Algorithm
function playRound(humanChoice, computerChoice) {

  // If the round result is a tie
  if (humanChoice === computerChoice) {
    console.log(`No one won! you both chose ${humanChoice}`);
  } 
  
  // If the user wins the round
  else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    console.log(`You chose ${humanChoice}; Computer chose ${computerChoice}
      
You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
  
  // If the user loses the round
  else {
    console.log(`You chose ${humanChoice}; Computer chose ${computerChoice}
      
You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  // Print the current score
  console.log(`You ${humanScore} - ${computerScore} Computer`);
}

// The game with multiple rounds
function playGame() {
  let rounds = 1; // Rounds start with 1

  // Play until the user or computer reaches 3
  while(humanScore < 3 && computerScore < 3) {
    
    let humanSelection = getHumanChoice();
    if (humanSelection === 'Invalid') { continue; } // If the user selects an invalid value, the round is ignored
    let computerSelection = getComputerChoice();
    
    console.log(`\nRound ${rounds++}`); // Increase by 1 in each round

    playRound(humanSelection, computerSelection);
  }

  // Announcing the final winner and final score
  // If the user wins
  if (humanScore > computerScore) {
    console.log(`\nYou win the game!
      
Final Result: You ${humanScore} - ${computerScore} Computer`)
  }
  
  // If the user loses
  else {
    console.log(`\nComputer win the game!
      
Final Result: You ${humanScore} - ${computerScore} Computer`)
  }
}

playGame();