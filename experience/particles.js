import * as THREE from 'three';

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.5,
  sizeAttenuation: true,
});

const particlesGeometry = new THREE.BufferGeometry();
const count = 1500;

const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 800;
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
);

export const stars = new THREE.Points(particlesGeometry, particlesMaterial);
stars.position.set(0, 0, -300);
