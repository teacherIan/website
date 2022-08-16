import * as THREE from 'three';

//export const ambientLight = new THREE.AmbientLight('#ffffff', 0);

const vec = new THREE.Vector3(0, 0, 0);

// export const directionalLight = new THREE.DirectionalLight('#ffffff', 2);
// DirectionalLight.castShadow = true;

export const pointLight = new THREE.PointLight('#ffffff', 10);
pointLight.position.set(-20, 50, -10);
pointLight.castShadow = true;

pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;

pointLight.shadow.camera.far = 150;

// export const pointLightHelper = new THREE.PointLightHelper(pointLight);

export const pointLightTwo = new THREE.PointLight('#ffffff', 10);
pointLightTwo.position.set(-40, 15, -5);
pointLightTwo.castShadow = true;

pointLightTwo.shadow.mapSize.width = 1024;
pointLightTwo.shadow.mapSize.height = 1024;

pointLightTwo.shadow.camera.far = 150;

// export const pointLightHelperTwo = new THREE.PointLightHelper(pointLightTwo);

// export const pointLightThree = new THREE.PointLight('#ffffff', 1.5);
// pointLightThree.position.set(-15, 7, 10);
// pointLightThree.castShadow = true;

export const pointLightHelperOne = new THREE.CameraHelper(
  pointLight.shadow.camera
);
export const pointLightHelperTwo = new THREE.CameraHelper(
  pointLightTwo.shadow.camera
);

export const paramsGUI = {
  lightDistance: 70,
};
