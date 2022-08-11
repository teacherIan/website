import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { scene, camera } from './init';
import { sceneMaterial, sunMaterial } from './textureloader';
import 'three/examples/fonts/optimer_bold.typeface.json';

// 'node_modules/three/examples/fonts/helvetiker_bold.typeface.json'

const loader = new FontLoader();

export let textMesh = new THREE.Mesh();

loader.load(
  'node_modules/three/examples/fonts/optimer_bold.typeface.json',
  function (font) {
    const geometry = new TextGeometry('Welcome', {
      font: font,
      size: 50,
      height: 10,
      curveSegments: 20,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 5,
      bevelOffset: 0,
      bevelSegments: 10,
    });
    geometry.center();

    textMesh = new THREE.Mesh(geometry, sunMaterial);

    textMesh.position.set(0, -500, -300);
    textMesh.lookAt(camera.position);

    scene.add(textMesh);
  }
);
