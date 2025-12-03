// Scene, Camera, Renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the wireframe globe
const geometry = new THREE.SphereGeometry(1, 32, 16); // Radius, width segments, height segments
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); // Green wireframe
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Position the camera
camera.position.z = 3;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the globe
    globe.rotation.y += 0.005;

    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();