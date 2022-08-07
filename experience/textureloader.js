import * as THREE from 'three';

/**
 * Textures
 */

const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log('loadingManager: loading started');
};
loadingManager.onLoaded = () => {
  console.log('loadingManager: loading finished');
};
loadingManager.onProgress = () => {
  console.log('loadingManager: loading progressing');
};
loadingManager.onError = () => {
  console.log('loadingManager: loading error');
};

const textureLoader = new THREE.TextureLoader(loadingManager);

/**
 * Map one
 */
export const roughnessTexture = textureLoader.load(
  '../static/textures/one/ROUGH.jpg'
);
export const mainColorTexture = textureLoader.load(
  '../static/textures/one/COLOR_copy-min.jpg'
);

export const normalTexture = textureLoader.load(
  '../static/textures/one/NORM.jpg'
);

export const sceneMaterialColor = '#ffffff';
export const sceneMaterial = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity: 1,
  map: mainColorTexture,
  normalMap: normalTexture,
  roughnessMap: roughnessTexture,
  metalness: 0.77,
  roughness: 0.14,
  normalScale: new THREE.Vector2(10, 10),
  clearcoat: 0.2,
  clearcoatRoughness: 0.25,
  color: sceneMaterialColor,
  reflectivity: 0,
});

export const sunMaterialColor = '#ff0000';
export const sunMaterial = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity: 1,
  map: mainColorTexture,
  normalMap: normalTexture,
  roughnessMap: roughnessTexture,
  metalness: 0.45,
  roughness: 1,
  normalScale: new THREE.Vector2(100, 100),
  clearcoat: 1,
  clearcoatRoughness: 1,
  color: sunMaterialColor,
  side: THREE.DoubleSide,
  reflectivity: 0,
});
