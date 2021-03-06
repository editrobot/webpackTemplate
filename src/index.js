import './style.css';
import * as THREE from 'three';
import Data from './data.xml';
import printMe from './print.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ffffff');
document.body.appendChild(renderer.domElement);
var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
render();

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module');
		// printMe();
		btn.onclick = printMe;
	})
}