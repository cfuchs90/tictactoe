const Player = function(playerName, playerSymbol) {
  const name = playerName;
  const symbol = playerSymbol;
  
  return {name, symbol};
}


const Board = (function() {
  let field = new Array(9);
  field = ["", "", "", "", "", "", "", "", ""];

  function clear() {
    this.field = field.map(x => x = "")
  }
  
  return {field, clear};
})()


const Display = (function() {
  const grid = document.querySelectorAll('.player-mark')
  const scoreP1 = document.querySelector("#p1score")
  const scoreP2 = document.querySelector("#p2score")

  
  const getBoard = function() {
    let gridArray = Array.from(grid, x => x.textContent);

    Board.field = [...gridArray];
  }

    
  const round = (func) => {
    grid.forEach(element => element.removeEventListener("click", func));
    grid.forEach(element => element.addEventListener("click", func));
  }

  
  const clear = function() {
    grid.forEach((item) => {
      item.textContent = "";
    });
    Board.clear();
  }

  const score = function(winner) {
    if(winner == player1.name) {
      let scoreString = parseInt(scoreP1.textContent) +1;
      scoreP1.textContent = scoreString;
    } else {
      let scoreString = parseInt(scoreP2.textContent) +1;
      scoreP2.textContent = scoreString;
    }
  }

  return { grid, getBoard, round, clear, score};
})()


const Game = function(player1, player2) {
  currentPlayer = player1;
  let winner;
  
  const turn = function() {
      if(currentPlayer == player1) {
	if(event.target.textContent !== player2.symbol) {
		event.target.textContent = player1.symbol;
		Display.getBoard();
		winner = win();
		currentPlayer = player2;
	}
      } else {
	 if(event.target.textContent !== player1.symbol) {
	   event.target.textContent = player2.symbol;
	    Display.getBoard();
	    winner = win();
	   currentPlayer = player1;
	}
      }

  }

  const win = function() {
    if([Board.field[0], Board.field[1], Board.field[2]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[0], Display.grid[1], Display.grid[2]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[0], Board.field[3], Board.field[6]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[0], Display.grid[3], Display.grid[6]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[1], Board.field[4], Board.field[7]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[1], Display.grid[4], Display.grid[7]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[2], Board.field[5], Board.field[8]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[2], Display.grid[5], Display.grid[8]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[2], Board.field[4], Board.field[6]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[2], Display.grid[4], Display.grid[6]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[0], Board.field[1], Board.field[2]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[0], Display.grid[1], Display.grid[2]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[3], Board.field[4], Board.field[5]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[3], Display.grid[4], Display.grid[5]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[6], Board.field[7], Board.field[8]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[6], Display.grid[7], Display.grid[8]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } else if([Board.field[0], Board.field[4], Board.field[8]].every(elem => elem == currentPlayer.symbol)) {
      [Display.grid[0], Display.grid[4], Display.grid[8]].forEach(item => item.style.color = "red");
          Display.score(currentPlayer.name);
      Display.grid.forEach(item => item.removeEventListener("click", turn));
      return currentPlayer.name;
      
    } 
  }

  
  return {turn}
}


const player1 = Player("christian", "X")
const player2 = Player("niclas", "O")
let currentGame = Game(player1, player2);



Display.round(currentGame.turn)

