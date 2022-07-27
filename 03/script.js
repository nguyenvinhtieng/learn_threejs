// canvas DOM
let canvas = document.querySelector('.webgl');

// sence
const scene = new THREE.Scene();

// block
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh)

const geometry1 = new THREE.BoxGeometry(1, 2, 1);
const material1 = new THREE.MeshBasicMaterial({ color: "red" }); 
const mesh1 = new THREE.Mesh(geometry, material);

scene.add(mesh1)

// Camera
const sizes = {
  width: 800,
  height: 600
}
const camera = new 
THREE.PerspectiveCamera(75, sizes.width / sizes.height);

scene.add(camera);

// Move camera
camera.position.z = 6;
camera.position.x = 3;
camera.position.y = 3;

// Render
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

