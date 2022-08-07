import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { sceneMaterial } from './textureloader';

export const worldFloorParams = {
  x: 70,
  y: 40,
  z: 70,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};

export const worldFloor = new THREE.Mesh(
  new THREE.BoxBufferGeometry(
    worldFloorParams.x,
    worldFloorParams.y,
    worldFloorParams.z
  ),
  sceneMaterial
);

console.log(worldFloor.geometry.attributes.uv);

worldFloor.receiveShadow = true;

const cannonBoxShape = new CANNON.Box(
  new CANNON.Vec3(
    worldFloorParams.x * 0.5,
    worldFloorParams.y * 0.5,
    worldFloorParams.z * 0.5
  )
);
export const cannonBoxBody = new CANNON.Body({
  shape: cannonBoxShape,
  mass: 0,
  position: new CANNON.Vec3(0, -5, 0),
});

worldFloor.position.y = -2;

window.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  worldFloor.rotation.z = -x * 0.5;

  const y = event.clientY / window.innerHeight - 0.5;
  worldFloor.rotation.x = y * 0.5;
});

cannonBoxBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), 0.2);

// const boxArrayGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
// const boxArrayMaterial = new THREE.MeshNormalMaterial();

// export const boxCreator = (x, y, z, meshArray) => {
//   const squareMesh = new THREE.Mesh(boxArrayGeometry, boxArrayMaterial);
//   squareMesh.scale.set(x, y, z);
// };
