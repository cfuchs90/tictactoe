const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;
  

  return {name, symbol};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];

  // const update = () => field = Display.getBoard();

  return {field};
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
      if(event.target.textContent !== player2.symbol) {
	event.target.textContent = player1.symbol;
	currentPlayer = player2;
      }
    } else {
      if(event.target.textContent !== player1.symbol) {
      event.target.textContent = player2.symbol;
      currentPlayer = player1;
      }
    }
    getBoard();
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
		currentPlayer = player2;
	}
      } else {
	 if(event.target.textContent !== player1.symbol) {
	   event.target.textContent = player2.symbol;
	   currentPlayer = player1;
	}
      }
      Display.getBoard();
  }

  const over = function() {
  }

  return {turn}
}


const player1 = Player("christian", "X")
const player2 = Player("alex", "O")
let currentGame = Game(player1, player2);



Display.round(currentGame.turn)

