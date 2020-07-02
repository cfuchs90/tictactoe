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


  const _turn = function() {
    if(currentPlayer == player1) {
      event.target.textContent = player1.symbol;
      currentPlayer = player2;
    } else {
      event.target.textContent = player2.symbol;
      currentPlayer = player1;
    }
  }
    
  const round = () => {
    grid.forEach(element => element.removeEventListener("click", _turn));
    grid.forEach(element => element.addEventListener("click", _turn));
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

