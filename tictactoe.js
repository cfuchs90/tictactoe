const Player = function(playerName, playerSymbol, playerTurn) {
  const name = playerName;
  const symbol = playerSymbol;
  const turn = playerTurn;


  return {name, symbol, turn};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];

  const update = () => field = Display.getBoard();

  return {field, print, update};
})()


const Display = (function() {
  const grid = document.querySelectorAll('.player-mark')
  const player1 = Player("christian", "X", true);
  const player2 = Player("heinz", "O", false);

  let currentPlayer = player1;

  const getBoard = function() {
    let gridArray = Array.from(grid, x => x.textContent);

    Board.field = [...gridArray];
  }

    /* the outer function provides the player variable to the inner "select" function.
       The select function in turn marks the specified square with the players symbol,
       and removes the event listeners from the grid.
       The select function will then get passed on to the addEventListener function as 
       a callback */

  const getSelection = function(player) {

    const select = function(event) {
    event.target.textContent = player.symbol;
    grid.forEach(item => item.removeEventListener("click", select));
    Board.update();
    }

    grid.forEach(item => item.addEventListener("click", select));
  }  


  const round = function() {
    if(currentPlayer == player1) {
      event.target.textContent = player1.symbol;
      currentPlayer = player2;
    } else {
      event.target.textContent = player2.symbol;
      currentPlayer = player1;
    }
  }
    
  const bla = () => {
    grid.forEach(element => element.removeEventListener("click", round));
    grid.forEach(element => element.addEventListener("click", round));
  }


  // const clear = function() {
  //   grid.forEach((item) => {
  //     item.textContent = "";
  //   });
  //   Board.clear();
  // }
  
  return { grid, getSelection, getBoard, bla};
})()


// const player1 = Player("christian", "X", true);
// const player2 = Player("heinz", "O", false);

// const clearButton = document.querySelector('#clear');

Display.bla()

