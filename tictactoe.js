const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;

  const getName = () => name;
  const getSymbol = () => symbol;

  const markField = function(event) {
    event.target.textContent = this.getSymbol();
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

  // const selection = function(event, player) {
  //   // event.target.textContent = "X";
  //   console.log(this);
  //   event.target.textContent = player.getSymbol();
  //   // this.textContent = player1.getSymbol();
  //   updateBoard();
  //   grid.forEach(item => item.removeEventListener("click", selection.bind(player)));
  // }


  const getSelection = function(player) {

    const select = function(event) {
      event.target.textContent = player.getSymbol();
      grid.forEach(item => item.removeEventListener("click", select));
    }

    grid.forEach(item => item.addEventListener("click", select));
    updateBoard();

  }  

  const clear = function() {
    grid.forEach((item) => {
      item.textContent = "";
    });
    Board.clear();
  }

  
  return {getSelection, clear, updateBoard};
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
