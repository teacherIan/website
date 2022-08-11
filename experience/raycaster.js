import * as THREE from 'three';
import { camera } from './init';

export const mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

export const raycaster = new THREE.Raycaster();

// raycaster.setFromCamera(mouse, camera);
