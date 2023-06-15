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