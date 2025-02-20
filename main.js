import './main.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),

});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const pointLight = new THREE.PointLight(0xfffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xfffff);
scene.add( ambientLight, pointLight);
camera.position.z = 20;

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);
const controls = new OrbitControls(camera, renderer.domElement);

//texture loader call vacj function for loading 

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
 
}