let difficulty = 'Normal';

function startGame() {
  const clickSound = new Audio('assets/sounds/start_click.mp3');
  clickSound.play();

  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('gameScreen').classList.remove('hidden');
  document.getElementById('gameScreen').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('gameScreen').style.opacity = 1;
  }, 100);
}

function showCredits() {
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('creditsScreen').classList.remove('hidden');

  const creditsMusic = new Audio('assets/sounds/credits_theme.mp3');
  creditsMusic.loop = true;
  creditsMusic.volume = 0.5;
  creditsMusic.play();

  setTimeout(() => {
    const message = document.getElementById('thankYouMessage');
    if (difficulty === 'Difícil') {
      message.textContent = 'Eres un superviviente';
      message.classList.add('survivor');
    } else {
      message.textContent = 'Gracias por jugar';
    }
    message.classList.remove('hidden');
    document.getElementById('endOptions').classList.remove('hidden');
  }, 20000);
}

function returnToMenu() {
  location.reload();
}

function restartGame() {
  startGame();
}

function saveGame(slotNumber) {
  const saveData = {
    timestamp: new Date().toLocaleString(),
    zone: 'Zona segura',
    difficulty: difficulty,
    playerState: {}
  };
  localStorage.setItem(`saveSlot${slotNumber}`, JSON.stringify(saveData));

  const typewriterSound = new Audio('assets/sounds/typewriter_keys.mp3');
  typewriterSound.play();
}

function loadGameMenu() {
  alert('Aquí iría el menú de carga con los slots disponibles.');
}
