// Array para representar o tabuleiro do jogo
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
  
// Variável para controlar o jogador atual
let currentPlayer = 'X';
  
// Função para fazer uma jogada
function makeMove(row, col) {
// Verifica se a célula selecionada está vazia e o jogo não acabou
    if (board[row][col] === '' && !isGameOver()) {
    // Define a jogada atual no tabuleiro
        board[row][col] = currentPlayer;
      
    // Atualiza o texto da célula no HTML
        let button = document.getElementById('cell-' + row + '-' + col);
        button.textContent = currentPlayer;
      
    // Verifica se o jogo acabou após a jogada
        if (isGameOver()) {
            alert('Fim de jogo! O jogador ' + currentPlayer + ' venceu!');
            resetGame();
        } else {
            // Alterna para o próximo jogador
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Função para verificar se o jogo acabou
function isGameOver() {
    // Verifica se há uma linha, coluna ou diagonal com três símbolos iguais
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] !== '' &&
            board[i][0] === board[i][1] &&
            board[i][1] === board[i][2]
        ) {
        return true;
        }
      
        if (
            board[0][i] !== '' &&
            board[0][i] === board[1][i] &&
            board[1][i] === board[2][i]
        ) {
        return true;
        }
    }
    
    if (
      board[0][0] !== '' &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return true;
    }
    
    if (
      board[0][2] !== '' &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return true;
    }
    
    // Verifica se todas as células foram preenchidas sem haver um vencedor
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === '') {
          return false;
        }
      }
    }
    alert('Fim de jogo! Empate');
    return true;
}
  
// Função para reiniciar o jogo
function resetGame() {
    // Limpa o tabuleiro
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    
    // Limpa o texto das células no HTML
    let buttons = document.getElementsByClassName('casas');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].textContent = '';
    }
    
    // Define o jogador inicial como 'X'
    currentPlayer = 'X';
}
  
// Adiciona o evento de clique a cada célula do tabuleiro
let buttons = document.getElementsByClassName('casas');
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let row = Math.floor(i / 3);
    let col = i % 3;
    button.addEventListener('click', function() {
      makeMove(row, col);
    });
}