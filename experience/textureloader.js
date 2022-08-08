import * as THREE from 'three';
import mainColorURL from '../static/textures/one/COLOR_copy-min.jpg';
import roughnessTextureURL from '../static/textures/one/ROUGH.jpg';
import normalTextureURL from '../static/textures/one/NORM.jpg';

const textureLoader = new THREE.TextureLoader();

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
