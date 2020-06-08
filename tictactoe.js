const Player = (name, symbol) => {
  let playerName = name;
  let playerSymbol = symbol;

  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  const setSymbol = (newSymbol) => playerSymbol = newSymbol;

  return {getName, getSymbol, setSymbol};
}

const gameBoard = (function () {
  board = new Array(9);

  const printBoard = () => console.log(board);

  return {printBoard};
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
    markerList.forEach((item) => item.addEventListener("click", (e) => {
      e.target.textContent = "O";
      // Get index of current node list item
      // e.target.
    }));
  }
  
  return {setupBoard, printPlayerNames, clear};
})()

const clearButton = document.querySelector("#clear");
const player1 = Player("christian", "X");
const player2 = Player("max", "O");

// displayController.markBoard();
displayController.printPlayerNames();
displayController.setupBoard();
console.log(player1.getSymbol());

clearButton.addEventListener("click", () => displayController.clear());
