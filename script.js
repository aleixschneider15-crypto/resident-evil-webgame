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
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threeContainer').appendChild(renderer.domElement);

// Luz
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(light);

// Cargar modelo
const loader = new GLTFLoader();
loader.load('assets/models/personaje.glb', function(gltf) {
  scene.add(gltf.scene);
}, undefined, function(error) {
  console.error('Error al cargar el modelo:', error);
});

// Posición de cámara
camera.position.z = 5;

// Animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
