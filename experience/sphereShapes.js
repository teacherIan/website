import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { sceneMaterial, sunMaterial } from './textureloader';

const sphereGeometry = new THREE.SphereBufferGeometry(4, 64, 64);

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

const sunGeometry = new THREE.SphereBufferGeometry(10, 32, 32);

export const sunMeshOne = new THREE.Mesh(sunGeometry, sunMaterial);
export const sunMeshTwo = new THREE.Mesh(sunGeometry, sunMaterial);

const cannonSunMeshOneBodyShape = new CANNON.Sphere(1);
export const cannonSunMeshOneBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 60, 0),
  shape: cannonSunMeshOneBodyShape,
});

const cannonSunMeshTwoBodyShape = new CANNON.Sphere(1);
export const cannonSunMeshTwoBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 60, 0),
  shape: cannonSunMeshTwoBodyShape,
});
