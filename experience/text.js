import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { scene, camera } from './init';
import { sceneMaterial, sunMaterial } from './textureloader';
import kennyFont from '../static/fonts/kenpixel.ttf';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FrontSide } from 'three';

export const textGroup = new THREE.Group();

// export let textMesh = new THREE.Mesh();
const ttfLoader = new TTFLoader();
ttfLoader.load(kennyFont, (json) => {
  const loader = new FontLoader();
  const parseFont = loader.parse(json);

  const headerGeometry = new TextGeometry('', {
    font: parseFont,
    size: 100,
    height: 10,
    curveSegments: 0,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 5,
    side: FrontSide,
  });
  headerGeometry.center();

  const headerTextMesh = new THREE.Mesh(headerGeometry, sunMaterial);

  headerTextMesh.position.set(0, -150, -500);
  headerTextMesh.lookAt(camera.position);
  headerTextMesh.name = 'Hello';

  textGroup.add(headerTextMesh);
});

ttfLoader.load(kennyFont, (json) => {
  const loader = new FontLoader();
  const parseFont = loader.parse(json);

  const contactGeometry = new TextGeometry('-> MENU <-', {
    font: parseFont,
    size: 70,
    height: 50,
    curveSegments: 1,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 2,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  contactGeometry.center();

  const contactTextMesh = new THREE.Mesh(contactGeometry, sunMaterial);

  contactTextMesh.position.set(0, -800, -300);

  contactTextMesh.lookAt(camera.position);
  // contactTextMesh.rotation.set(100, 0, 0);

  textGroup.add(contactTextMesh);
});

// 'node_modules/three/examples/fonts/helvetiker_bold.typeface.json'
