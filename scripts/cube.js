const scene = new THREE.Scene();

// Cámara
const cam = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
cam.position.z = 5;

// Renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize("50%", "50%");

const element = document.getElementById('element');
element.appendChild(renderer.domElement);

// Cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xfff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


function handleResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    cam.aspect = newWidth / newHeight;
    cam.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
}
window.addEventListener('resize', handleResize);

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, cam);
}
handleResize();
animate();