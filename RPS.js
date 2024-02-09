const score = JSON.parse(localStorage.getItem('score')) || {Wins: 0, Loses: 0, Tie: 0};

function playGame(playerChoice) {
  const COM = computerChoice();
  let result = '';

  if (playerChoice === 'Rock') {
    if (COM === 'Rock') {
      result = 'Tie.';
    } else if (COM === 'Paper') {
      result = 'You Lost.';
    } else {
      result = 'You Won!';
    }
  } else if (playerChoice === 'Paper') {
    if (COM === 'Rock') {
      result = 'You Won!';
    } else if (COM === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You Lost.';
    }
  } else {
    if (COM === 'Rock') {
      result = 'You Lost.';
    } else if (COM === 'Paper') {
      result = 'You Won!';
    } else {
      result = 'Tie';
    }
  }

  if (result === 'You Won!') {
    score.Wins++;
  } else if (result === 'You Lost.') {
    score.Loses++;
  } else {
    score.Ties++;
  }

  document.querySelector('p.result-match').innerHTML = result;
  document.querySelector('p.endgame').innerHTML = `You <img class="emoji" src="assets/${playerChoice}Hand.png"> <img class="emoji" src="assets/${COM}Hand.png"> COM`;
  document.querySelector('p.result-score').innerHTML = `Wins ${score.Wins}, Losses ${score.Loses}, Ties ${score.Ties}`;
  localStorage.setItem('score', JSON.stringify(score));
}

function computerChoice() {
  const choice = Math.random();
  if (choice < 1/3 && choice >= 0) {
    return 'Rock'
  } else if (choice < 2/3 && choice >= 1/3 ) {
    return 'Paper'
  } else { 
    return 'Scissors'
  }
}

function removeScore() {
  score.Wins = 0;
  score.Loses = 0;
  score.Ties = 0;
}