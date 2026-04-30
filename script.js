function getHumanChoice() {
  let humanChoice = prompt(`Chose via number:\n1 = Rock\n2 = Paper\n3 = Scissors`); 
  
  if (humanChoice === '1') {
    return 'Rock';
  } else if (humanChoice === '2') {
    return 'Paper';
  } else if (humanChoice === '3') {
    return 'Scissors';
  } else {
    return 'Invalid';
  }

/*   if (humanChoice === '1') return 'Rock';
  if (humanChoice === '2') return 'Paper';
  if (humanChoice === '3') return 'Scissors';
  return 'Invalid'; */
}

function getComputerChoice() {
  let randomNum = Math.random();

  let computerChoice = (randomNum < 0.33) ? 'Rock'
  : (randomNum > 0.66) ? 'Scissors'
  : 'Paper';

  return computerChoice;

/*   if (randomNum < 0.33) {
    return 'Rock';
  } else if (randomNum > 0.66) {
    return 'Scissors';
  } else {
    return 'Paper';
  } */
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`No one won! you both chose ${humanChoice}`);
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    console.log(`You chose ${humanChoice}; Computer chose ${computerChoice}
      
You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You chose ${humanChoice}; Computer chose ${computerChoice}
      
You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`You ${humanScore} - ${computerScore} Computer`);
}

// let Round = 1;

function playGame() {
  let Round = 1;

  while(humanScore < 3 && computerScore < 3) {
    
    let humanSelection = getHumanChoice();
    if (humanSelection === 'Invalid') { continue; }
    let computerSelection = getComputerChoice();
    
    console.log(`\nRound ${Round++}`);

    playRound(humanSelection, computerSelection);
  }

/*   for(let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  } */

  if (humanScore > computerScore) {
    console.log(`\nFinal Result: You ${humanScore} - ${computerScore} Computer
      
You win the game!`)
  } else {
    console.log(`\nFinal Result: You ${humanScore} - ${computerScore} Computer
    
You lose the game!`)
  }
}

playGame();
/* playGame();
playGame();
playGame();
playGame(); */