{
function playGame(playerInput) {
  clearMessages()
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

// Losowanie liczby od 1 do 3

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

// Nazwa ruchu 

  const argComputerMove = getMoveName(randomNumber),
    argPlayerMove = getMoveName(playerInput);
  console.log('Gracz wybrsał: ' + playerInput);

  


  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove +', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

  if (argComputerMove != argPlayerMove) {

  displayResult(argComputerMove, argPlayerMove);
  }

  if (argComputerMove == argPlayerMove) {
    printMessage('We dwójke zagraliśmy ' + argPlayerMove);
  printMessage('Mamy remis!');
  }

  console.log('moves:', argComputerMove, argPlayerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}