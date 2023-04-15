let playerWins = 0;
let computerWins = 0;

let playerMove = 'X';
let computerMove = 'O';
let gameOver = false;

playerWins = JSON.parse(localStorage.getItem('playerWins')) || playerWins;
computerWins = JSON.parse(localStorage.getItem('computerWins')) || computerWins;



document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;




function fillCell(place) {

  let where = place;


  let isFilled = document.querySelector(`.${place}`).innerHTML

  if ((playerMove === 'X') && (!isFilled)) {
    if (gameOver) {
      return;

    }
    

    if (gameOver === false) {


      

      document.querySelector(`.${place}`).innerHTML = 'X';

      computerTurn();

      

    }
  } else if ((playerMove === 'O') && (!isFilled)) {

    if (gameOver === false) {


      

       document.querySelector(`.${place}`).innerHTML = 'O';

       computerTurn();

       


      }

    }



    if (gameOver) {
      return;
    }



    
  }


function checkWin() {
  let topLeftValue = document.querySelector('.topLeft').innerHTML;
  let topMiddleValue = document.querySelector('.topMiddle').innerHTML;
  let topRightValue = document.querySelector('.topRight').innerHTML;
  let middleLeftValue = document.querySelector('.middleLeft').innerHTML;
  let middleMiddleValue = document.querySelector('.middleMiddle').innerHTML;
  let middleRightValue = document.querySelector('.middleRight').innerHTML;
  let bottomLeftValue = document.querySelector('.bottomLeft').innerHTML;
  let bottomMiddleValue = document.querySelector('.bottomMiddle').innerHTML;
  let bottomRightValue = document.querySelector('.bottomRight').innerHTML;
  if (

    /*     horizontals */

    topLeftValue === 'X' && topMiddleValue === 'X' && topRightValue === 'X' ||
    middleLeftValue === 'X' && middleMiddleValue === 'X' && middleRightValue === 'X' ||
    bottomLeftValue === 'X' && bottomMiddleValue === 'X' && bottomRightValue === 'X' ||
    /* 
        verticals */

    topLeftValue === 'X' && middleLeftValue === 'X' && bottomLeftValue === 'X' ||
    topMiddleValue === 'X' && middleMiddleValue === 'X' && bottomMiddleValue === 'X' ||
    topRightValue === 'X' && middleRightValue === 'X' && bottomRightValue === 'X' ||

    /*   diagonals */

    topLeftValue === 'X' && middleMiddleValue === 'X' && bottomRightValue === 'X' ||
    bottomLeftValue === 'X' && middleMiddleValue === 'X' && topRightValue === 'X'

  ) {



    if (playerMove === 'X' && gameOver === false) {

      playerWins++;

      document.querySelector('.whoWon').innerHTML = `You won!`

      document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;

      gameOver = true;

    } else if (playerMove === 'O' && gameOver === false) {

      computerWins++;

      document.querySelector('.whoWon').innerHTML = `Computer won!`

      document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;

      gameOver = true;
    }



  } else if (

    /*     horizontals */

    topLeftValue === 'O' && topMiddleValue === 'O' && topRightValue === 'O' ||
    middleLeftValue === 'O' && middleMiddleValue === 'O' && middleRightValue === 'O' ||
    bottomLeftValue === 'O' && bottomMiddleValue === 'O' && bottomRightValue === 'O' ||
    /* 
        verticals */

    topLeftValue === 'O' && middleLeftValue === 'O' && bottomLeftValue === 'O' ||
    topMiddleValue === 'O' && middleMiddleValue === 'O' && bottomMiddleValue === 'O' ||
    topRightValue === 'O' && middleRightValue === 'O' && bottomRightValue === 'O' ||

    /*   diagonals */

    topLeftValue === 'O' && middleMiddleValue === 'O' && bottomRightValue === 'O' ||
    bottomLeftValue === 'O' && middleMiddleValue === 'O' && topRightValue === 'O'

  ) {



    if (computerMove === 'O' && gameOver === false) {

      computerWins++;

      document.querySelector('.whoWon').innerHTML = `Computer won!`;

      document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;

      gameOver = true;

    } else if (computerMove === 'X' && gameOver === false) {
      playerWins++;

      document.querySelector('.whoWon').innerHTML = `You won!`

      document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;

      gameOver = true;

    }

    
    

  } else if (
    topLeftValue &&
    topMiddleValue &&
    topRightValue &&
    middleLeftValue &&
    middleMiddleValue &&
    middleRightValue &&
    bottomLeftValue &&
    bottomMiddleValue &&
    bottomRightValue
  ) {
    if (gameOver === false) {

    document.querySelector('.whoWon').innerHTML = `It is a tie!`;

    document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;

    gameOver === true;

    }
  }

  localStorage.setItem('playerWins', JSON.stringify(playerWins));
  localStorage.setItem('computerWins', JSON.stringify(computerWins));

}
function playAgain() {
  console.log('in');
  document.querySelector('.topLeft').innerHTML = '';
  document.querySelector('.topMiddle').innerHTML = '';
  document.querySelector('.topRight').innerHTML = '';
  document.querySelector('.middleLeft').innerHTML = '';
  document.querySelector('.middleMiddle').innerHTML = '';
  document.querySelector('.middleRight').innerHTML = '';
  document.querySelector('.bottomLeft').innerHTML = '';
  document.querySelector('.bottomMiddle').innerHTML = '';
  document.querySelector('.bottomRight').innerHTML = '';

  if (playerMove === 'X') {
    playerMove = 'O'
    computerMove = 'X'
  } else {
    playerMove = 'X';
    computerMove = 'O';
  }
  document.querySelector('.whoWon').innerHTML = '';
  gameOver = false;

  if (computerMove === 'X') {
    computerTurn();
  }

}

function resetScore() {
 

  localStorage.removeItem('playerWins');
  localStorage.removeItem('computerWins');

  playerWins = 0;
  computerWins = 0;

  document.querySelector('.score').innerHTML = `Player wins = ${playerWins} Computer wins = ${computerWins}`;
}

function computerTurn() {


  let topLeftValue = document.querySelector('.topLeft').innerHTML;
  let topMiddleValue = document.querySelector('.topMiddle').innerHTML;
  let topRightValue = document.querySelector('.topRight').innerHTML;
  let middleLeftValue = document.querySelector('.middleLeft').innerHTML;
  let middleMiddleValue = document.querySelector('.middleMiddle').innerHTML;
  let middleRightValue = document.querySelector('.middleRight').innerHTML;
  let bottomLeftValue = document.querySelector('.bottomLeft').innerHTML;
  let bottomMiddleValue = document.querySelector('.bottomMiddle').innerHTML;
  let bottomRightValue = document.querySelector('.bottomRight').innerHTML;






  if (

    /*     horizontals */

    topLeftValue === 'X' && topMiddleValue === 'X' && topRightValue === 'X' ||
    middleLeftValue === 'X' && middleMiddleValue === 'X' && middleRightValue === 'X' ||
    bottomLeftValue === 'X' && bottomMiddleValue === 'X' && bottomRightValue === 'X' ||
    /* 
        verticals */

    topLeftValue === 'X' && middleLeftValue === 'X' && bottomLeftValue === 'X' ||
    topMiddleValue === 'X' && middleMiddleValue === 'X' && bottomMiddleValue === 'X' ||
    topRightValue === 'X' && middleRightValue === 'X' && bottomRightValue === 'X' ||

    /*   diagonals */

    topLeftValue === 'X' && middleMiddleValue === 'X' && bottomRightValue === 'X' ||
    bottomLeftValue === 'X' && middleMiddleValue === 'X' && topRightValue === 'X'

  ) {



    return;


  } else if (

    /*     horizontals */

    topLeftValue === 'O' && topMiddleValue === 'O' && topRightValue === 'O' ||
    middleLeftValue === 'O' && middleMiddleValue === 'O' && middleRightValue === 'O' ||
    bottomLeftValue === 'O' && bottomMiddleValue === 'O' && bottomRightValue === 'O' ||
    /* 
        verticals */

    topLeftValue === 'O' && middleLeftValue === 'O' && bottomLeftValue === 'O' ||
    topMiddleValue === 'O' && middleMiddleValue === 'O' && bottomMiddleValue === 'O' ||
    topRightValue === 'O' && middleRightValue === 'O' && bottomRightValue === 'O' ||

    /*   diagonals */

    topLeftValue === 'O' && middleMiddleValue === 'O' && bottomMiddleValue === 'O' ||
    bottomLeftValue === 'O' && middleMiddleValue === 'O' && topRightValue === 'O'

  ) {


    return;
    
    }

    
    





 console.log(middleRightValue);





  

  let random = Math.random();

  console.log(random);

  let whereComputerWillGo = random

  console.log(whereComputerWillGo);


  var min = 1;
  var max = 10;



if (gameOver === false) {

  if (whereComputerWillGo >= 0 && whereComputerWillGo < 0.11) {
    console.log('in')
    if (topLeftValue != '') {
      computerTurn();
    } else {
      document.querySelector('.topLeft').innerHTML = `${computerMove}`;
      console.log('topLeftSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.11 && whereComputerWillGo < 0.22) {
    console.log('in')
    if (topMiddleValue != '') {
     computerTurn();

    } else {
      document.querySelector('.topMiddle').innerHTML = `${computerMove}`;
      console.log('topMiddleSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.22 && whereComputerWillGo < 0.33) {
    console.log('in')
    if (topRightValue != '') {
     computerTurn();


    } else {
      document.querySelector('.topRight').innerHTML = `${computerMove}`;
      console.log('topRightSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.33 && whereComputerWillGo < 0.44) {
    console.log('in')
    if (middleLeftValue != '') {
      computerTurn();
    } else {
      document.querySelector('.middleLeft').innerHTML = `${computerMove}`;
      console.log('middleLeftSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.44 && whereComputerWillGo < 0.55) {
    console.log('in')
    if (middleMiddleValue != '') {
      computerTurn();
    } else {
      document.querySelector('.middleMiddle').innerHTML = `${computerMove}`;
      console.log('middleMiddleSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.55 && whereComputerWillGo < 0.66) {
    console.log('in')
    if (middleRightValue != '') {

      computerTurn();



    } else {
      document.querySelector('.middleRight').innerHTML = `${computerMove}`;
      console.log('middleRightSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.66 && whereComputerWillGo < 0.77) {
    console.log('in')
    if (bottomLeftValue != '') {
      computerTurn();
    } else {
      document.querySelector('.bottomLeft').innerHTML = `${computerMove}`;
      console.log('bottomLeftSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.77 && whereComputerWillGo < 0.88) {
    console.log('in')
    if (bottomMiddleValue != '') {
      computerTurn();
    } else {
      document.querySelector('.bottomMiddle').innerHTML = `${computerMove}`;
      console.log('bottomMiddleSuccesfull');
    }
  }

  if (whereComputerWillGo >= 0.88 && whereComputerWillGo <= 1) {
    console.log('in')
    if (bottomRightValue != '') {
      computerTurn();
    } else {
      document.querySelector('.bottomRight').innerHTML = `${computerMove}`;
      console.log('bottomRightSuccesfull');
    }
  }
}
}

