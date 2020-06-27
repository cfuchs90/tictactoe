const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;

  const getName = () => name;
  const getSymbol = () => symbol;

  return {getName, getSymbol};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];

  const print = () => console.log(field);
  const update = () => field = Display.getBoard();

  return {field, print, update};
})()


const Display = (function() {
  const grid = document.querySelectorAll('.player-mark')

  const getBoard = function() {
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
      event.target.textContent = player.getSymbol();
      grid.forEach(item => item.removeEventListener("click", select));
      // updateBoard();
    }

    grid.forEach(item => item.addEventListener("click", select));
  }  


  // const clear = function() {
  //   grid.forEach((item) => {
  //     item.textContent = "";
  //   });
  //   Board.clear();
  // }

  
  return {grid, getSelection, getBoard};
})()



// const clearButton = document.querySelector('#clear');

const player1 = Player("christian", "X");
const player2 = Player("christian", "O");
let currentPlayer = player1

// clearButton.addEventListener("click", () => Display.clear());

Display.getSelection(player1);
