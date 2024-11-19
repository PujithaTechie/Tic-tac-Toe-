const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            gameActive = false;
            cells[a].style.backgroundColor = cells[b].style.backgroundColor = cells[c].style.backgroundColor = '#90ee90';
            return true;
        }
    }
    return false;
};

const checkDraw = () => {
    return [...cells].every(cell => cell.innerText !== '');
};

const handleCellClick = (e) => {
    const cell = e.target;
    if (cell.innerText !== '' || !gameActive) return;
    cell.innerText = currentPlayer;
    cell.style.color = currentPlayer === 'X' ? '#ff4500' : '#1e90ff';

    if (checkWin()) {
        setTimeout(() => alert(`Player ${currentPlayer} wins!`), 10);
    } else if (checkDraw()) {
        setTimeout(() => alert('It\'s a draw!'), 10);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const resetGame = () => {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#fff';
        cell.style.color = '#000';
    });
    currentPlayer = 'X';
    gameActive = true;
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
