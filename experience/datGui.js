import { Color } from 'three';

import { paramsGUI, pointLight, pointLightTwo } from './lights';
import { worldFloorParams, worldFloor } from './boxShapes';
import {
  sceneMaterial,
  sunMaterial,
  sceneMaterialColor,
  sunMaterialColor,
} from './textureloader';

import { backgroundColor, scene } from './init';

//world Floor

const colors = {
  sceneMaterialColor,
  sunMaterialColor,
  backgroundColor,
};

import * as dat from 'dat.gui';
const GUI = new dat.GUI();

const sceneGUI = GUI.addFolder('scene');
sceneGUI.addColor(colors, 'backgroundColor').onChange(() => {
  scene.background = new Color(colors.backgroundColor);
});

const materialGUI = GUI.addFolder('material');
materialGUI.add(sceneMaterial, 'metalness').min(0).max(1).step(0.001);
materialGUI.add(sceneMaterial, 'roughness').min(0).max(1).step(0.001);
materialGUI.add(sceneMaterial, 'opacity').min(0).max(1).step(0.001);
materialGUI.add(sceneMaterial, 'clearcoat').min(0).max(1).step(0.001);
materialGUI.add(sceneMaterial, 'clearcoatRoughness').min(0).max(1).step(0.001);
materialGUI.add(sceneMaterial, 'reflectivity').min(0).max(1).step(0.001);
materialGUI.addColor(colors, 'sceneMaterialColor').onChange(() => {
  sceneMaterial.color.set(colors.sceneMaterialColor);
});

const sunGUI = GUI.addFolder('sunMaterial');
sunGUI.add(sunMaterial, 'metalness').min(0).max(1).step(0.001);
sunGUI.add(sunMaterial, 'roughness').min(0).max(1).step(0.001);
sunGUI.add(sunMaterial, 'opacity').min(0).max(1).step(0.001);
sunGUI.add(sunMaterial, 'clearcoat').min(0).max(1).step(0.001);
sunGUI.add(sunMaterial, 'clearcoatRoughness').min(0).max(1).step(0.001);
sunGUI.add(sunMaterial, 'reflectivity').min(0).max(1).step(0.001);
sunGUI.addColor(colors, 'sunMaterialColor').onChange(() => {
  sunMaterial.color.set(colors.sunMaterialColor);
});

const lightsGUI = GUI.addFolder('lights');
lightsGUI.add(paramsGUI, 'lightDistance').min(0).max(100).step(1);
lightsGUI.add(pointLight, 'intensity').min(0).max(10).step(0.1);
lightsGUI.add(pointLightTwo, 'intensity').min(0).max(10).step(0.1);
