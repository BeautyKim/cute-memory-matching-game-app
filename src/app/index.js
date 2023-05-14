import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
scene.add(camera);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 1);
scene.add(ambientLight, directionalLight);


const tiles = [];
const tileSize = 1;
const gridSize = 4;

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const tile = new THREE.Mesh(
      new THREE.BoxGeometry(tileSize, tileSize, tileSize),
      new THREE.MeshBasicMaterial({ color: 0xcccccc })
    );
    tile.position.set(i * tileSize - (gridSize - 1) / 2, 0, j * tileSize - (gridSize - 1) / 2);
    scene.add(tile);
    tiles.push(tile);
  }
}


const controls = new OrbitControls(camera, renderer.domElement);

tile.addEventListener('click', () => {
  if (!tile.flipped) {
    tile.material.color.set(0xff0000); // change the color of the tile when flipped
    tile.flipped = true; // mark the tile as flipped
    if (flippedTile) {
      if (tile.value === flippedTile.value) {
        // the tiles match!
        tile.matched = true;
        flippedTile.matched = true;
      } else {
        // the tiles don't match, flip them back over after a short delay
        setTimeout(() => {
          tile.material.color.set(0xcccccc);
          tile.flipped = false;
          flippedTile.material.color.set(0xcccccc);
          flippedTile.flipped = false;
        }, 1000);
      }
      flippedTile = null;
    } else {
      flippedTile = tile;
    }
  }
});