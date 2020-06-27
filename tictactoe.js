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

  // const clear = () => field = field.map(item => item = "");

  // return {field, print, clear};
  return {field, print};
})()


const Display = (function() {
  const grid = document.querySelectorAll('.player-mark')

  const updateBoard = function() {
    let gridArray = Array.from(grid, x => x.textContent);

    for(let i = 0; i <= gridArray.length; i++)  {
      Board.field[i] = gridArray[i];
    }
  }


  const getSelection = function(player) {
    /* the outer function provides the player variable to the inner "select" function.
       The select function in turn marks the specified square with the players symbol,
       and removes the event listeners from the grid.
       The select function will then get passed on to the addEventListener function as 
       a callback */

    const select = function(event) {
      if(event.target.textContent === "") {
	event.target.textContent = player.getSymbol();
      } else {
	// TODO: keep player in loop until correct choice was made, give better errors
	alert("Heeeeell No!");
      }
      grid.forEach(item => item.removeEventListener("click", select));
      updateBoard();
    }

    grid.forEach(item => item.addEventListener("click", select));
  }  


  // const clear = function() {
  //   grid.forEach((item) => {
  //     item.textContent = "";
  //   });
  //   Board.clear();
  // }

  
  return {grid, getSelection, updateBoard};
})()



const clearButton = document.querySelector('#clear');

const player1 = Player("christian", "X");
const player2 = Player("christian", "O");
let currentPlayer = player1

// clearButton.addEventListener("click", () => Display.clear());


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
