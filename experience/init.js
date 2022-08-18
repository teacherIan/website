import * as THREE from 'three';
const canvas = document.getElementById('webgl');
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { cssRenderer, cssScene } from './cssScene';

/**
 * Screen Size
 */

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  fieldOfView: 60,
};

// THREE Scene

export const scene = new THREE.Scene();

// THREE Camera

export const camera = new THREE.PerspectiveCamera(
  sizes.fieldOfView,
  sizes.width / sizes.height
);

camera.position.z = 75;
camera.position.y = 100;
camera.position.x = 50;

scene.add(camera);

// THREE Renderer

export const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.shadowMap.enabled = true;

// renderer.shadowMap.type = THREE.VSMShadowMap;
// renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

// renderer.physicallyCorrectLights = true;
// renderer.render(scene, camera);

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  renderer.setSize(sizes.width, sizes.height);
  camera.aspect = sizes.width / sizes.height;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  camera.updateProjectionMatrix();
  // renderer.render(scene, camera);
});

export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.addEventListener('change', () => {
  renderer.render(scene, camera);
});

export const backgroundColor = '#0d0d2b';
scene.background = new THREE.Color(backgroundColor);

// document.body.appendChild(renderer.domElement);

// controls.enablePan = false;
// controls.enableRotate = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.1;
