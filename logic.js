let players = ['x', 'o'];
let activePlayer = 0;

let board, emptyBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  
function startGame() {
  let randomNumber = Math.random(); 

  board = emptyBoard;

  if (randomNumber < 0.5) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  } // Установить активного игрока
  
  renderBoard(board); // функция для отрисовки игрового поля
}

function switchPlayer() {
  if (activePlayer) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  isTie();
}

function click(row, col) {
  if (board[row][col] === '') {
    board[row][col] = players[activePlayer];
  }
  
  renderBoard(board);
  calculateVictory(row, col, players[activePlayer]);
  switchPlayer();
  isTie();
}

function calculateVictory(row, col, symbol) {
  //проверка столбца
  let victoryCondition = true;
  for (i = 0; i < board.length; i++) {
    if (board[i][col] !== symbol) {
      victoryCondition = false;
      break;
    } 
  }
  if (victoryCondition) {
    showWinner(symbol);
    return;
  }
  
  //проверка строки
  victoryCondition = true;
  for (i = 0; i < board.length; i++) {
    if (board[row][i] != symbol) {
      victoryCondition = false;
      break;
    } 
  }
  if (victoryCondition) {
    showWinner(symbol);
    return;
  }
  
  //проверка диагонали
  victoryCondition = true;
  for (i = 0; i < board.length; i++) {
    if (board[i][i] !== symbol) {
      victoryCondition = false;
      break;
    }
  }
  if (victoryCondition) {
    showWinner(symbol);
    return;
  }
  //проверка обратной диагонали
  victoryCondition = true;
  for (i = 0; i < board.length; i++) {
    if (board[i][board.length - 1 - i] !== symbol) {
      victoryCondition = false;
      break;
    }
  }
  if (victoryCondition) {
    showWinner(symbol);
    return;
  }
}

function isTie() {
  let isTie = true;

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] == "") {
        isTie = false;
        break;
      }
    }
    if (!isTie) {
      break;
    }
  }
  if (isTie) {
    itsDraw();
  }
}