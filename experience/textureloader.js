import * as THREE from 'three';

/**
 * Textures
 */

const image = new Image();
const texture = new THREE.Texture(image);

image.addEventListener('load', () => {
  texture.needsUpdate = true;
});
image.src = '../static/textures/orange/orange_stained_glass_43_87.jpg';

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
export const sunMatcap = textureLoader.load('../static/matcaps/sunTwo.png');

// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// const colorTexture = textureLoader.load('/textures/checkerboard-2x2.png')
// const colorTexture = textureLoader.load(
//   '/textures/minecraft.png',
//   () => {
//     console.log('textureLoader: loading finished');
//   },
//   () => {
//     console.log('textureLoader: loading progressing');
//   },
//   () => {
//     console.log('textureLoader: loading error');
//   }
// );
// colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping;
// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 3
// colorTexture.offset.x = 0.5
// colorTexture.offset.y = 0.5
// colorTexture.rotation = Math.PI * 0.25
// colorTexture.center.x = 0.5
// colorTexture.center.y = 0.5
// colorTexture.generateMipmaps = false;
// colorTexture.minFilter = THREE.NearestFilter;
// colorTexture.magFilter = THREE.NearestFilter;

// const alphaTexture = textureLoader.load('../static/textures/one/');
// const heightTexture = textureLoader.load('../static/textures/one/');
// export const normalTexture = textureLoader.load(
//   '../static/textures/one/NORM.jpg'
// );
// export const ambientOcclusionTexture = textureLoader.load(
//   '../static/textures/one/OCC.jpg'
// );
// const metalnessTexture = textureLoader.load('../static/textures/one/');

/**
 * Map one
 */
export const roughnessTexture = textureLoader.load(
  '../static/textures/one/ROUGH.jpg'
);
export const mainColorTexture = textureLoader.load(
  '../static/textures/one/COLOR_copy-min.jpg'
);

//Don't use
// export const mainDisplacementTexture = textureLoader.load(
//   '../static/textures/one/DISP.png'
// );

export const normalTexture = textureLoader.load(
  '../static/textures/one/NORM.jpg'
);

export const occ = textureLoader.load('../static/textures/one/OCC.jpg');
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

// export const roughnessTexture = textureLoader.load(
//   '../static/textures/yellow_patterned_glass_43_85_4K/yellow_patterned_glass_43_85_height.jpg'
// );
// export const mainColorTexture = textureLoader.load(
//   '../static/Stripes0045_L.jpg'
// );

// console.log(mainColorTexture);

// export const sceneMaterial = new THREE.MeshStandardMaterial({
//   map: mainColorTexture,

//   transparent: true,

//   metalness: 0.8,
//   roughness: 0.4,
// });
