import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import gsap from 'gsap'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Scene } from 'three'

/**
 * Debug
 */

const parameters = {
    materialColor: '#ffeded'
}


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */

const gltfLoader = new GLTFLoader()

let wellModel;

gltfLoader.load(
    '../assets/well/scene.gltf',
    (gltf) =>
    {
        const root = gltf.scene
        wellModel = root
        root.scale.set(0.020, 0.020, 0.020)
        root.rotation.y = 0.5
        root.rotation.x = 0.3
        root.translateY(-3.7);
        scene.add(root)
    }
)

let groundModel;

gltfLoader.load(
    '../assets/ground/scene.gltf',
    (gltf) =>
    {
        const root = gltf.scene
        groundModel = root
        //root.scale.set(1.5, 1, 1.5)
        root.rotation.y = 0.5
        root.rotation.x = 0.3
        root.translateY(-3.7);
        scene.add(root)
    }
)

let coffinModel;

gltfLoader.load(
    '../assets/coffin/scene.gltf',
    (gltf) =>
    {
        const root = gltf.scene
        coffinModel = root
        root.scale.set(1, 1, 1)
        root.rotation.y = 0.9
        root.rotation.x = 0.3
        root.translateY(-11)
        root.translateX(-7)
        scene.add(root)
    }
)

console.log(groundModel)

/**
 * Objects
 */
// Texture
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

/**
 * Mesh
*/
const geometry = new THREE.PlaneGeometry( 2, 2 );
const texture = new THREE.TextureLoader().load('textures/images/AgeDeath.jpg')
const material = new THREE.MeshStandardMaterial({
   map: texture
})

const ageMesh = new THREE.Mesh( geometry, material );
scene.add( ageMesh );

ageMesh.position.set(2, -28, 1)

const map = new THREE.PlaneGeometry( 3, 3 );
const mamTexture = new THREE.TextureLoader().load('textures/images/map.jpg')
const mapMaterial = new THREE.MeshStandardMaterial({
   map: mamTexture
})

const mapMesh = new THREE.Mesh( map, mapMaterial );
scene.add( mapMesh );

mapMesh.position.set(-3, -35, 1)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(0, 0.3, 1)
// directionalLight.rotation.y = 0.5
directionalLight.rotation.x = 1
scene.add(directionalLight)

const objectsDistance = 8
/**
 * Particles
 */
// Geometry
const particlesCount = 600
const positions = new Float32Array(particlesCount * 3)

const directionY = 3

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * directionY
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: textureLoader,
    size: 0.04
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 10
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)


    camera.position.y = window.scrollY / 10 + 10

    console.log(camera.position.z)

    if(newSection != currentSection)
    {
        currentSection = newSection
    }

    if(currentSection == 0)
    {
        document.body.style.backgroundColor = "#272121"
        gsap.to(wellModel.position, { duration: 2, y: -3.5 })
    }

    if(currentSection == 1)
    {
        console.log("Current Section is now 1");
        document.body.style.backgroundColor = "#13518b";
        document.body.style.transition = "all 1s";
        // wellModel.scene.position.y = -10 * scrollY
        // gsap.to(wellModel.position, { duration: 2, y: -14 })
    }
    
    if(currentSection == 2)
    {
        console.log("Current Section is now 2");
        document.body.style.backgroundColor = "#2d3882";
        document.body.style.transition = "all 1s"
    }

    if(currentSection == 3)
    {
        console.log("Current Section is now 3");
        document.body.style.backgroundColor = "#272121";
        document.body.style.transition = "all 1s"
    }
// background-image: linear-gradient(to bottom right, #2d3882, #00aeef);
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate camera
    camera.position.y = - scrollY / sizes.height * objectsDistance - 3

    const parallaxX = cursor.x * 0.5
    const parallaxY = - cursor.y * 0.5
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    if(wellModel && groundModel)
    {
        wellModel.rotation.y += (parallaxX - wellModel.rotation.y + 0.3) * 5 * deltaTime
        groundModel.rotation.y += (parallaxX - groundModel.rotation.y + 0.3) * 5 * deltaTime
    }

    mapMesh.rotation.y += (parallaxX - mapMesh.rotation.y + 0.3) * 5 * deltaTime
    
    ageMesh.rotation.y += (parallaxX - ageMesh.rotation.y - 0.3) * 5 * deltaTime
        
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()