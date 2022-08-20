const menuHTML = document.querySelector('.container');
import './htmlController';
import './style.css';
import * as THREE from 'three';
import { scene, renderer, camera, controls } from './experience/init.js';
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
import { raycaster, mouse } from './experience/raycaster';
import './experience/datGui';
// import { textGroup } from './experience/text';
import { currentScene } from './experience/htmlController';
import * as TWEEN from '@tweenjs/tween.js';
import { stars } from './experience/particles';
console.log(stars);

scene.add(stars);

let showMenu = false;
let timeout = false;

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
 * Text Group
 */

// scene.add(textGroup);

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

// const vector = new THREE.Vector3(100, -50, 0);
// camera.lookAt(vector);

const loop = (time) => {
  stats.update();

  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = deltaTime;
  world.step(1 / 60, deltaTime, 3);

  /**
   * Update Tween.js
   */

  TWEEN.update(time);

  /**
   * update raycaster
   */

  const handleClick = () => {
    timeout = !timeout;
    showMenu = !showMenu;
    if (showMenu) {
      menuHTML.style.width = 'calc(15vh + 15vw + 20px);';
      menuHTML.style.opacity = 1;
      timeout = false;
      menuHTML.classList = 'container';
    }
    // setTimeout(() => {
    //   console.log('Handled click');

    //   console.log(showMenu);

    //   timeout = false;
    // }, 1000);
  };

  // raycaster.setFromCamera(mouse, camera);
  // const itemsToCheck = [textGroup];
  // const intersect = raycaster.intersectObjects(itemsToCheck, true);
  // // console.log(intersect);
  // if (intersect.length > 0 && !timeout) {
  //   document.getElementById('webgl').style.cursor = 'pointer';
  //   window.addEventListener(
  //     'mousedown',
  //     () => {
  //       if (!timeout) {
  //         handleClick();
  //       }

  //       // window.open('http://www.cnn.com');
  //     },
  //     { once: true }
  //   );
  // } else {
  //   document.getElementById('webgl').style.cursor = 'initial';
  // }

  /**
   * World object is destroyed and recreated after falling
   */

  if (objectArray.mesh.position.y < -1000) {
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
  controls.update();
  renderer.render(scene, camera);

  window.requestAnimationFrame(loop);
};

loop();
