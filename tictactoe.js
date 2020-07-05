const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;
  

  return {name, symbol};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];

  const winningConfigs = [ [field[0] == field[1] && field[1] == field[2]],
			   [field[3] == field[4] && field[4] == field[5]],
			   [field[6] == field[7] && field[7] == field[8]],
			   [field[0] == field[3] && field[3] == field[6]],
			   [field[0] == field[4] && field[4] == field[8]],
			   [field[1] == field[4] && field[4] == field[7]],
			   [field[2] == field[5] && field[5] == field[8]]];

  // const update = () => field = Display.getBoard();

  return {field, winningConfigs};
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

    
  const round = (func) => {
    grid.forEach(element => element.removeEventListener("click", func));
    grid.forEach(element => element.addEventListener("click", func));
  }

  
  // const clear = function() {
  //   grid.forEach((item) => {
  //     item.textContent = "";
  //   });
  //   Board.clear();
  // }
  
  return { grid, getBoard, round};
})()


const Game = function(player1, player2) {
  currentPlayer = player1;
  
  const turn = function() {
      if(currentPlayer == player1) {
	if(event.target.textContent !== player2.symbol) {
		event.target.textContent = player1.symbol;
		Display.getBoard();
		over();
		currentPlayer = player2;
	}
      } else {
	 if(event.target.textContent !== player1.symbol) {
	   event.target.textContent = player2.symbol;
	    Display.getBoard();
	    over();
	   currentPlayer = player1;
	}
      }
      // Display.getBoard();
      // over();
  }

  const over = function() {
    if(Board.field.slice(0,3).every(elem => elem == currentPlayer.symbol)) {
      alert(`${currentPlayer.name} wins!`);
  }
  }

  return {turn}
}


const player1 = Player("christian", "X")
const player2 = Player("alex", "O")
let currentGame = Game(player1, player2);



Display.round(currentGame.turn)

