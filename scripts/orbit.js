import * as THREE from './three.module.js';
import { OrbitControls } from './THREEJSORBITCONTROLS.js';

// Escena
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0x666666);

// Cámara
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
cam.position.z = 5;
cam.position.y = -3;
cam.rotation.x = .5;
// cam.rotation.y = -10;

// Renderizador
const renderer = new THREE.WebGLRenderer({alpha: true}); //alpha: transparencia
renderer.setSize("50%", "50%");
renderer.shadowMap.enabled = true;

const element = document.getElementById('element');
element.appendChild(renderer.domElement);

// Cubo
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material);
cube.castShadow = true; // Generar sombras
cube.receiveShadow = true; // Permitir que el cubo reciba sombras
cube.position.set(0,0,2);
scene.add(cube);

// LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 1, 1);
light.castShadow = true;
scene.add(light);


//grid
// var grid = new THREE.GridHelper(100, 100); //numero de cuadrados que va a tener la malla
// scene.add(grid);

// PLANE
var planeGeometry = new THREE.PlaneGeometry(20,20,32,32);
var planeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true; //Recibir sombras
plane.position.set(0,0,0);
scene.add(plane);


// Función para manejar el cambio de tamaño del div
function handleResize() {
    const newWidth = element.clientWidth;
    const newHeight = element.clientHeight;

    cam.aspect = newWidth / newHeight;
    cam.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
}

// Llamada a handleResize cuando cambia el tamaño del div
window.addEventListener('resize', handleResize);

// Animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, cam);
}

handleResize(); // Llamada inicial para ajustar el tamaño
animate();