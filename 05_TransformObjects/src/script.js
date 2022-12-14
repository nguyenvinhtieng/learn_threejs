import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.set(2, -2, 1)
// scene.add(mesh)
// mesh.scale.x = 2
// console.log(mesh.position.length(0))

const group = new THREE.Group();
scene.add(group)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1), 
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1), 
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
group.add(cube2)
cube2.position.set(2,0,0)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1), 
    new THREE.MeshBasicMaterial({color: 0xff00ff})
)
group.add(cube3)
cube3.position.set(-2,0,0)


// Axes helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.set(1, 2, 3)
camera.position.set(0, 0, 5)

scene.add(camera)

// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)