const Player = (name, symbol) => {
  let playerName = name;
  let playerSymbol = symbol;

  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  const setSymbol = (newSymbol) => playerSymbol = newSymbol;

  return {getName, getSymbol, setSymbol};
}

const gameBoard = (function () {
  board = new Array(9);

  const printBoard = () => console.table(board);

  return {printBoard};
})()


