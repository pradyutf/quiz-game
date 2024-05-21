document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    document.getElementById('final-score').innerText = score;
});

function restartGame() {
    window.location.href = 'game.html';
}

function goHome() {
    window.location.href = 'index.html';
}
