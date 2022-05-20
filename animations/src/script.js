import "./style.css";
import * as THREE from "three";
import gsap from 'gsap'

const generateCube = ({ color }) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  return cube;
};

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

const cube1 = generateCube({ color: 0x0096c7 });
const cube2 = generateCube({ color: 0x48cae4 });
const cube3 = generateCube({ color: 0xade8f4 });

cube1.position.x = -1.5;
cube3.position.x = 1.5;

// Add cubes to scene
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

// Add camera to scene
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Clock
const clock = new THREE.Clock();



// Animations
const tick = () => {
  gsap.to(cube1.position, { duration: 1, delay: 1, x: 2 })

  // const elapsedTime = clock.getElapsedTime();
  // console.log(elapsedTime);
  
  // // Object updates
  // cube1.rotation.x = elapsedTime * Math.PI; // we do this to balance the framerate
  // cube2.rotation.x = elapsedTime * Math.PI;
  // cube2.rotation.y = elapsedTime * Math.PI;
  // cube3.rotation.y = elapsedTime * Math.PI;

  // cube1.position.x = Math.cos(elapsedTime * 2) * 2;
  // cube2.position.y = Math.sin(elapsedTime * 2) * 2;
  // cube3.position.z = Math.tan(elapsedTime * 2) * 2;
  
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
