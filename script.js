let userName = document.querySelector('#user-name');
userName.textContent = prompt('What is your name?', 'User');

let humanChoice = document.querySelector('#human-choice');
let computerChoice = document.querySelector('#computer-choice');

let humanWins = document.querySelector('#human-wins');
let computerWins = document.querySelector('#computer-wins');

let humanScore = document.querySelector('#human-wins > .score');
let computerScore = document.querySelector('#computer-wins > .score');
let ties = document.querySelector('#ties > .score');

let hScore = 0;
let cScore = 0;
let tScore = 0;
let rounds = 1;

let btn = document.querySelectorAll('.btn');
let logs = document.querySelector('#logs');

function getComputerChoice() {
  let random = Math.random();

  return (random > 0.66) ? 'Rock'
    : (random > 0.33) ? 'Paper'
    : 'Scissors';
}

function playRound(humanSelection, computerSelection) {
  let log = document.createElement('div');
  let finalLog = document.createElement('div');

  if (humanSelection === computerSelection) {
    tScore++;
    ties.textContent = tScore;
    log.textContent = `Round ${rounds}: Both choose ${humanSelection}. Tie!`;
    logs.appendChild(log);
    log.scrollIntoView({ behavior: 'smooth' });
    rounds++
  } 
  
  else if (
    (humanSelection === 'Rock' && computerSelection === 'Scissors') ||
    (humanSelection === 'Paper' && computerSelection === 'Rock') ||
    (humanSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
      hScore++;
      humanScore.textContent = hScore;
      log.textContent = `Round ${rounds}: ${userName.textContent} choose ${humanSelection}, computer choose ${computerSelection}. ${userName.textContent} Win!`;
      logs.appendChild(log);
      log.scrollIntoView({ behavior: 'smooth' });
      rounds++;
  }

  else {
    cScore++;
    computerScore.textContent = cScore;
    log.textContent = `Round ${rounds}: ${userName.textContent} choose ${humanSelection}, computer choose ${computerSelection}. Computer Win!`;
    logs.appendChild(log);
    log.scrollIntoView({ behavior: 'smooth' });
    rounds++
  }

  if (hScore === 5) {
    finalLog.textContent = `${userName.textContent} Win the Game!`;
    finalLog.style.color = 'green';
    logs.appendChild(finalLog);
    finalLog.scrollIntoView({ behavior: 'smooth' });

  } else if (cScore === 5) {
    finalLog.textContent = `Computer Win the Game!`;
    finalLog.style.color = 'red';
    logs.appendChild(finalLog);
    finalLog.scrollIntoView({ behavior: 'smooth' });
  }
}

function playGame(e) {
  let hChoice = e.currentTarget.textContent.toString();
  let cChoice = getComputerChoice();
  
  humanChoice.textContent = hChoice;
  computerChoice.textContent = cChoice;
  
  playRound(hChoice, cChoice);
  
  if (hScore === 5 || cScore === 5) {
    btn.forEach(button => button.disabled = true);
  }
}

btn.forEach(button => {
  button.addEventListener('click', playGame)});