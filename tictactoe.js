const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;
  
  return {name, symbol};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];
  
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
		win();
		currentPlayer = player2;
	}
      } else {
	 if(event.target.textContent !== player1.symbol) {
	   event.target.textContent = player2.symbol;
	    Display.getBoard();
	    win();
	   currentPlayer = player1;
	}
      }
  }

  const win = function() {
    if([Board.field[0], Board.field[1], Board.field[2]].every(elem => elem == currentPlayer.symbol)) {
      alert("Yeeeehaa");
      [Display.grid[0], Display.grid[1], Display.grid[2]].forEach(item => item.style.color = "green");
    } else if([Board.field[0], Board.field[3], Board.field[6]].every(elem => elem == currentPlayer.symbol)) {
      alert("Yabadabadu");
    } else if([Board.field[1], Board.field[4], Board.field[7]].every(elem => elem == currentPlayer.symbol)) {
      alert("Another one!")
    } else if([Board.field[2], Board.field[5], Board.field[8]].every(elem => elem == currentPlayer.symbol)) {
      alert("Another two!")
    } else if([Board.field[0], Board.field[1], Board.field[2]].every(elem => elem == currentPlayer.symbol)) {
      alert("Another two!")
    } else if([Board.field[3], Board.field[4], Board.field[5]].every(elem => elem == currentPlayer.symbol)) {
      alert("Another two!")
    } else if([Board.field[6], Board.field[7], Board.field[8]].every(elem => elem == currentPlayer.symbol)) {
      alert("Another two!")
    } else if([Board.field[0], Board.field[4], Board.field[8]].every(elem => elem == currentPlayer.symbol)) {
      alert("Another two!")
    } 
  }

  
  return {turn}
}


const player1 = Player("christian", "X")
const player2 = Player("alex", "O")
let currentGame = Game(player1, player2);



Display.round(currentGame.turn)

