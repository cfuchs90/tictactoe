const Player = function(name, symbol) {
  let playerName = name;
  let playerSymbol = symbol;
  let score = 0;

  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  const setSymbol = (newSymbol) => playerSymbol = newSymbol;
  const getScore = () => score;
  const incScore = () => score += 1;

  return {getName, getSymbol, setSymbol, getScore, incScore};
}


const gameBoard = (function () {
  board = new Array(9);
  const printBoard = () => console.log(board);
  return {printBoard, board};
})()


const displayController = (function () {
  const markerList = document.querySelectorAll(".player-mark");
  const playerSpanElements = document.querySelectorAll("span");

  const clear = function ()  {
    markerList.forEach((item) => item.textContent = " ");
  }


  const printPlayerNames = function() {
    playerSpanElements[0].textContent = player1.getName()
    playerSpanElements[1].textContent = player2.getName()
  }


  const setupBoard = function() {
    /* TODO set playerSymbol as textContent */
    markerList.forEach((item) => item.addEventListener("click", (e) => {
      e.target.textContent = "O";
    }));
  }

  const getBoard = function() {
    let boardArray = [];
    markerList.forEach(item => boardArray.push(item.textContent));
    return boardArray;
  }
  
  return {setupBoard, printPlayerNames, clear, getBoard};
})()


const Game = function (p1, p2) {
  const sayPlayer = () => console.log(player1.getName());
  
  return {sayPlayer};
}


const clearButton = document.querySelector("#clear");
const player1 = Player("christian", "X");
const player2 = Player("max", "O");
let game = Game(player1, player2);
gameBoard.board = displayController.getBoard();

// displayController.markBoard();
displayController.printPlayerNames();
displayController.setupBoard();
console.log(player1.getSymbol());

clearButton.addEventListener("click", () => displayController.clear());
