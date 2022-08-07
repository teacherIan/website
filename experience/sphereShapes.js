import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { sceneMaterial, sunMaterial } from './textureloader';

// export const sampleSphere = new THREE.Mesh(
//   new THREE.SphereBufferGeometry(0.5, 32, 32),
//   new THREE.MeshNormalMaterial()
// );

// const cannonBodyShape = new CANNON.Sphere(0.5);
// export const cannonSphereBody = new CANNON.Body({
//   mass: 1,
//   position: new CANNON.Vec3(0, 5, 0),
//   shape: cannonBodyShape,
// });

// import { mainDisplacementTexture } from './textureloader';
// import { ambientOcclusionTexture } from './textureloader';

const sphereGeometry = new THREE.SphereBufferGeometry(4, 32, 32);
// const sphereMaterial = new THREE.MeshStandardMaterial({
//   map: mainColorTexture,
//   normalMap: normalTexture,
//   roughnessMap: roughnessTexture,
//   metalness: 1,
//   roughness: 0.6,
// });
// sphereMaterial.normalScale.set(100, 100);

// sphereMaterial.normalScale.set(100, 100);
// sphereMaterial.displacementScale = 10;

export const createSphere = () => {
  const gameSphere = new THREE.Mesh(sphereGeometry, sceneMaterial);
  gameSphere.castShadow = true;
  const cannonBodyShape = new CANNON.Sphere(4);
  const cannonBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 60, 0),
    shape: cannonBodyShape,
  });

  return {
    mesh: gameSphere,
    cannon: cannonBody,
  };
};

import { sunMatcap } from './textureloader';

const sunGeometry = new THREE.SphereBufferGeometry(6, 32, 32);
// const sunMaterial = new THREE.MeshStandardMaterial({
//   color: '#Ffff13',
//   metalness: 0,
//   roughness: 1,
//   side: THREE.BackSide,
// });

export const sunMeshOne = new THREE.Mesh(sunGeometry, sunMaterial);
export const sunMeshTwo = new THREE.Mesh(sunGeometry, sunMaterial);

const cannonSunMeshOneBodyShape = new CANNON.Sphere(6);
export const cannonSunMeshOneBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 60, 0),
  shape: cannonSunMeshOneBodyShape,
});

const cannonSunMeshTwoBodyShape = new CANNON.Sphere(6);
export const cannonSunMeshTwoBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 60, 0),
  shape: cannonSunMeshTwoBodyShape,
});

// sunMeshOne.position.set(, 40, 10);