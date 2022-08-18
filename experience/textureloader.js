import * as THREE from 'three';
import mainColorURL from '../static/textures/one/COLOR_copy-min.jpg';
import roughnessTextureURL from '../static/textures/one/ROUGH.jpg';
import normalTextureURL from '../static/textures/one/NORM.jpg';
import trueSunTexture from '../static/textures/one/2k_sun.jpeg';

const textureLoader = new THREE.TextureLoader();

const trueSunTextureLoaded = textureLoader.load(trueSunTexture);

export const roughnessTexture = textureLoader.load(roughnessTextureURL);
export const mainColorTexture = textureLoader.load(mainColorURL);
export const normalTexture = textureLoader.load(normalTextureURL);

export const sceneMaterialColor = '#ffffff';
export const sceneMaterial = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity: 1,
  map: mainColorTexture,
  normalMap: normalTexture,
  roughnessMap: roughnessTexture,
  metalness: 0.84,
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
  map: trueSunTextureLoaded,
  // normalMap: normalTexture,
  // roughnessMap: roughnessTexture,
  // metalness: 0.45,
  // roughness: 0,
  // normalScale: new THREE.Vector2(10, 10),
  // clearcoat: 0.2,
  // clearcoatRoughness: 1,

  // side: THREE.DoubleSide,
  // reflectivity: 0,
  // emissive: '#ffffff',
  // emissiveIntensity: 0.5,
});

// export const sunMaterial = new THREE.MeshPhysicalMaterial({
//   map: trueSunTextureLoaded,
// });
