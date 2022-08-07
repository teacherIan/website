import './style.css';
import * as THREE from 'three';
import { scene, renderer, camera } from './experience/init.js';
import { worldFloor } from './experience/boxShapes';
import {
  createSphere,
  sunMeshOne,
  sunMeshTwo,
  cannonSunMeshOneBody,
  cannonSunMeshTwoBody,
} from './experience/sphereShapes';
import { world } from './experience/physicsWorld';
import { cannonBoxBody } from './experience/boxShapes';
import CannonDebugger from 'cannon-es-debugger';
import {
  pointLight,
  pointLightTwo,
  pointLightHelperOne,
  pointLightHelperTwo,
} from './experience/lights';
import { paramsGUI } from './experience/lights';

import './experience/datGui';
const cannonDebugger = new CannonDebugger(scene, world);
import Stats from 'three/examples/jsm/libs/stats.module';
const stats = Stats();
document.body.appendChild(stats.dom);

//GUI parameters

// const axisHelper = new THREE.AxesHelper(10);
// scene.add(axisHelper);

let objectArray = createSphere();

// console.log(objectArray);
scene.add(objectArray.mesh);
world.addBody(objectArray.cannon);

/**
 * Add Lights
 */

//scene.add(ambientLight);
// scene.add(directionalLight);
scene.add(pointLight);
scene.add(pointLightTwo);
// scene.add(pointLightHelperOne);
// scene.add(pointLightHelperTwo);
// scene.add(pointLightHelper);
// scene.add(pointLightHelperTwo);
// scene.add(pointLightThree);

/**
 * Add Shapes
 */

scene.add(worldFloor);
scene.add(sunMeshOne);

scene.add(sunMeshTwo);

/**
 * add world bodies
 */

world.addBody(cannonBoxBody);
world.addBody(cannonSunMeshOneBody);
world.addBody(cannonSunMeshTwoBody);

const clock = new THREE.Clock();
let oldElapsedTime = 0;

const vector = new THREE.Vector3(30, -10, 0);

const loop = () => {
  stats.update();
  // camera.lookAt(objectArray.mesh.position);

  // camera.rotateZ(0.1);
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = deltaTime;
  world.step(1 / 60, deltaTime, 3);
  if (objectArray.mesh.position.y < -550) {
    world.removeBody(objectArray.cannon);
    scene.remove(objectArray.mesh);
    objectArray = createSphere();
    scene.add(objectArray.mesh);
    world.addBody(objectArray.cannon);
    console.log(renderer.info);
  }

  pointLight.position.x =
    Math.cos(Math.PI * elapsedTime * 0.03) * paramsGUI.lightDistance;
  pointLight.position.z =
    Math.sin(Math.PI * elapsedTime * 0.03) * paramsGUI.lightDistance;
  sunMeshOne.rotateX(-0.005);
  sunMeshOne.rotateY(-0.005);

  sunMeshTwo.rotateX(-0.005);
  sunMeshTwo.rotateY(-0.005);

  sunMeshOne.position.copy(pointLight.position);

  pointLightTwo.position.z =
    Math.cos(Math.PI * elapsedTime * 0.03) * paramsGUI.lightDistance;
  pointLightTwo.position.y =
    Math.sin(Math.PI * elapsedTime * 0.03) * paramsGUI.lightDistance;
  pointLightTwo.position.x =
    Math.sin(-Math.PI * elapsedTime * 0.03) * paramsGUI.lightDistance;

  sunMeshTwo.position.copy(pointLightTwo.position);
  //update suns physics world
  cannonSunMeshOneBody.position.copy(pointLight.position);
  cannonSunMeshTwoBody.position.copy(pointLightTwo.position);

  objectArray.mesh.position.copy(objectArray.cannon.position);
  objectArray.mesh.quaternion.copy(objectArray.cannon.quaternion);
  // sampleSphere.position.copy(cannonSphereBody.position);

  cannonBoxBody.position.copy(worldFloor.position);
  cannonBoxBody.quaternion.copy(worldFloor.quaternion);

  // cannonDebugger.update();

  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};

loop();
