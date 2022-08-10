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
// import {  } from './experience/raycaster';
import './experience/datGui';

// import {
//   cssRenderer,
//   cssScene,
//   mouse,
//   raycaster,
//   containerCSSObject,
//   container,
// } from './experience/cssScene';

/**
 * debug
 */
const cannonDebugger = new CannonDebugger(scene, world);
import Stats from 'three/examples/jsm/libs/stats.module';
const stats = Stats();
document.body.appendChild(stats.dom);
// const axisHelper = new THREE.AxesHelper(10);
// scene.add(axisHelper);

/**
 * Add Lights
 */

scene.add(pointLight);
scene.add(pointLightTwo);
// scene.add(pointLightHelperOne);
// scene.add(pointLightHelperTwo);
// scene.add(pointLightHelper);
// scene.add(pointLightHelperTwo);
// scene.add(pointLightThree);
//scene.add(ambientLight);
// scene.add(directionalLight);

/**
 * add CSS Elements
 */

/**
 * Add Shapes
 */

let objectArray = createSphere();
scene.add(objectArray.mesh);
scene.add(worldFloor);
scene.add(sunMeshOne);
scene.add(sunMeshTwo);

/**
 * add world bodies
 */

world.addBody(cannonBoxBody);
world.addBody(cannonSunMeshOneBody);
world.addBody(cannonSunMeshTwoBody);
world.addBody(objectArray.cannon);

const clock = new THREE.Clock();
let oldElapsedTime = 0;

const vector = new THREE.Vector3(100, -50, 0);
camera.lookAt(vector);

const loop = () => {
  stats.update();

  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = deltaTime;
  world.step(1 / 60, deltaTime, 3);

  /**
   * update raycaster
   */

  // raycaster.setFromCamera(mouse, camera);
  // const itemsToCheck = [containerCSSObject, sunMeshOne];
  // const intersect = raycaster.intersectObjects(itemsToCheck, true);
  // console.log(intersect);

  /**
   * World object is destroyed and recreated after falling
   */

  if (objectArray.mesh.position.y < -550) {
    world.removeBody(objectArray.cannon);
    scene.remove(objectArray.mesh);
    objectArray = createSphere();
    scene.add(objectArray.mesh);
    world.addBody(objectArray.cannon);
  }

  /**
   * Update Lights
   */

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
  cannonSunMeshOneBody.position.copy(pointLight.position);
  cannonSunMeshTwoBody.position.copy(pointLightTwo.position);

  /**
   * Update physics world
   */
  objectArray.mesh.position.copy(objectArray.cannon.position);
  objectArray.mesh.quaternion.copy(objectArray.cannon.quaternion);
  cannonBoxBody.position.copy(worldFloor.position);
  cannonBoxBody.quaternion.copy(worldFloor.quaternion);

  // cannonDebugger.update();

  // cssRenderer.render(cssScene, camera);
  renderer.render(scene, camera);

  window.requestAnimationFrame(loop);
};

loop();
