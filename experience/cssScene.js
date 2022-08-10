// import * as THREE from 'three';

// import {
//   CSS3DRenderer,
//   CSS3DObject,
// } from 'three/examples/jsm/renderers/CSS3DRenderer';

// // const menuContainer = document.querySelector('.container');

// export const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
//   fieldOfView: 60,
// };

// export const cssScene = new THREE.Scene();

// export const container = document.createElement('div');
// container.classList.add('container');
// container.innerHTML = `<div class="container">
// <div class="Projects inner-container">
//   <div class="header">Projects</div>
//   <div class="items">
//     <div class="item selected"></div>
//     <div class="item"></div>
//     <div class="item"></div>

//   </div>
// </div>
// <div class="About Me inner-container">
//   <div class="header">About Me</div>
//   <div class="items">
//     <div class="item"></div>
//     <div class="item"></div>
//   </div>
// </div>
// <div class="Resume inner-container">
//   <div class="header">Resume</div>
//   <div class="items">
//     <div class="item"></div>
//     <div class="item"></div>
//   </div>
// </div>
// <div class="Demo-Lessons inner-container">
//   <div class="header">Demo Lessons</div>
//   <div class="items">
//     <div class="item"></div>
//     <div class="item"></div>
//   </div>
// </div>
// <div class="Resume inner-container">
//   <div class="header">Contact</div>
//   <div class="items">
//     <div class="item"></div>
//     <div class="item"></div>
//   </div>
// </div>
// </div>

// `;

// export const containerCSSObject = new CSS3DObject(container);
// containerCSSObject.position.set(10, -600, -1000);
// cssScene.add(containerCSSObject);

// containerCSSObject.addEventListener('click', () => {
//   console.log('clicked');
// });

// // const element = document.createElement('div');
// // element.innerHTML = 'HELLO';
// // element.classList.add('three');

// // const object = new CSS3DObject(element);
// // object.position.x = Math.random() * 200 - 100;
// // object.position.y = Math.random() * 200 - 100;
// // object.position.z = Math.random() - 300;

// // cssScene.add(object);

// // const menuContainer = document.createElement('div');
// // menuContainer.style.width = '100px';
// // menuContainer.style.height = '100px';
// // menuContainer.style.opacity = 1;
// // menuContainer.style.background = new THREE.Color(
// //   Math.random() * 0xffffff
// // ).getStyle();

// // const containerThree = new CSS3DObject(menuContainer);
// // containerThree.position.set(-50, 60, -500);

// // cssScene.add(containerThree);

// // export const containerMesh = new THREE.Mesh(
// //   new THREE.PlaneBufferGeometry(100, 100),
// //   new THREE.MeshBasicMaterial({ side: DoubleSide, color: '#ff0000' })
// // );

// // containerMesh.position.copy(containerThree.position);
// // containerMesh.rotation.copy(menuContainer.rotation);

// export const cssRenderer = new CSS3DRenderer();
// cssRenderer.setSize(sizes.width, sizes.height);
// cssRenderer.domElement.style.position = 'absolute';
// cssRenderer.domElement.style.top = 0;
// // document.body.appendChild(cssRenderer.domElement);
// // document.querySelector('.header').appendChild(cssRenderer.domElement);

// window.addEventListener('resize', () => {
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;
//   cssRenderer.setSize(sizes.width, sizes.height);
// });

// /**
//  * add raycaster
//  */

// export const mouse = new THREE.Vector2();

// window.addEventListener('mousemove', (event) => {
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// });
// export const raycaster = new THREE.Raycaster();
