const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;

  const getName = () => name;
  const getSymbol = () => symbol;

  const markField = function(e) {
    e.target.textContent = player.getSymbol();
    Display.updateBoard();
  }

  return {getName, getSymbol, markField};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];

  const print = () => console.log(field);

  const clear = () => field = field.map(item => item = "");

  return {field, print, clear};
})()


const Display = (function() {
  const grid = document.querySelectorAll('.player-mark')

  const updateBoard = function() {
    let gridArray = Array.from(grid, x => x.textContent);

    for(let i = 0; i <= gridArray.length; i++)  {
      Board.field[i] = gridArray[i];
    }
  }

  const clear = function() {
    grid.forEach((item) => {
      item.textContent = "";
    });
    Board.clear();
  }

  const select = function(event, player) {
    // event.target.textContent = "X";
    event.target.textContent = player.getSymbol();
  }

  const getSelectionP1 = (event) => select(event, player1);


  const getInput = function(player, selectionFunction) {
    grid.forEach(item => item.addEventListener("click", selectionFunction));
    // grid.forEach(item => item.addEventListener("click", alert("hello")));
    // grid.forEach(item => item.addEventListener("click", function getPlayerSelection(e)  {
    //   e.target.textContent = player.getSymbol();
    //   updateBoard();
    //   // this.removeEventListener("click", getPlayerSelection);
    // }));


  }

  const releaseGrid = function(func) {
    grid.forEach(item => item.removeEventListener("click", func));
  }
  
  return {grid, updateBoard, clear, getInput, releaseGrid, getSelectionP1};
})()



const clearButton = document.querySelector('#clear');

const player1 = Player("christian", "X");
const player2 = Player("christian", "O");
let currentPlayer = player1

clearButton.addEventListener("click", () => Display.clear());


// if(currentPlayer == player1) {
//   Display.getInput(currentPlayer);
//   currentPlayer = player2;
// } else {
//   Display.getInput(currentPlayer);
//   currentPlayer = player1;
// }

Display.getInput(player1);
		// Display.releaseGrid(player1);


let counter = 0;

// while(counter <= 9) {
//   Display.getInput(player1);
//   Display.updateBoard();
//   Display.releaseGrid();
//   Display.getInput(player2);
//   Display.updateBoard();
//   counter++;
// }
