import { useEffect } from 'react';

import * as THREE from 'three';
import SceneInit from './SceneInit';

function FirstCube(props) {
  let scene, camera, renderer, cube;
  let auto = true;
  let fixAnim = true;

  let ID = "Main_Cube_" + props.prop_id;
  const DIR = props.direction;

  const RAD = 6.28319;
  const NINTY = 1.5708;
  useEffect(() => {

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setClearColor( 0x000000, 0 ); // the default

        renderer.setSize(200, 200);
    
        // create shape
        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const loader = new THREE.TextureLoader();
        const cubeMaterials = [
            new THREE.MeshBasicMaterial({ color : 0xDDDDDD }), //right side
            new THREE.MeshBasicMaterial({ color : 0xDDDDDD }), //left side
            new THREE.MeshBasicMaterial({ map: loader.load(props.img_src)}), //top side
            new THREE.MeshBasicMaterial({ color : 0xDDDDDD }), //bottom side
            new THREE.MeshBasicMaterial({ color : 0xDDDDDD }), //front side
            new THREE.MeshBasicMaterial({ color : 0xDDDDDD }), //back side
        ];

        //create material, color, or image texture
        cube = new THREE.Mesh(geometry, cubeMaterials);
    
        // const edgesGeometry = new LineSegmentsGeometry().fromEdgesGeometry(
        //   new THREE.EdgesGeometry(cube.geometry, 40)
        // );
        // const colors = [];
        // for (let i = 0; i < edgesGeometry.attributes.instanceStart.count; i++) {
        //   colors.push(0, 0, 0, 0, 0, 0);
        // }
        // edgesGeometry.setColors(colors);
        
        // // create a fat line material with white color so the vertex colors show
        // const edgesMaterial = new LineMaterial({
        //   color: "white",
        //   vertexColors: true,
        //   linewidth: 5
        // });
        // const line = new LineSegments2(edgesGeometry, edgesMaterial);
        
        // cube.add(line);

        camera.position.z = 5;

        scene.add(cube);
        document.getElementById(ID).appendChild(renderer.domElement);
        document.getElementById(ID).addEventListener("mousedown", function () { fix(); }, false);
    }
    
    function fix() {
      if (auto) {
        auto = false;
        fixAnim = true;
        // if (cube.rotation.x < NINTY) {
        //   cube.rotation.x += RAD;
        // } 
        
        // if (cube.rotation.y < NINTY) {
        //   cube.rotation.y += RAD;
        // } 
        rotateAnim();
        // cube.rotation.x = 0;
        // cube.rotation.y = 0;  
        // renderer.render(scene, camera);
      } else {
        auto = true;
        animate();
      }
    }

    function rotateAnim() {
      if (fixAnim) {
        requestAnimationFrame(rotateAnim);
        cube.rotation.x += 0.02;
        cube.rotation.y -= 0.02;
        renderer.render(scene, camera);
      }

      if (cube.rotation.x > NINTY && cube.rotation.y < 0) {
        cube.rotation.x = NINTY;
        cube.rotation.y = 0;
        fixAnim = false;
        renderer.render(scene, camera);
      }
    }

    //animation
    function animate() {
      if (auto) {
        requestAnimationFrame(animate);
        // console.log("X " + cube.rotation.x + " Y " + cube.rotation.y);
        // if (cube.rotation.x > RAD) {
        //   cube.rotation.x = cube.rotation.x - RAD;
        // }

        // if (cube.rotation.y > RAD) {
        //   cube.rotation.y = cube.rotation.y - RAD;
        // }
        // cube.rotation.x += 0.005;
        // cube.rotation.y += 0.005;
        if (DIR == "left") {
          cube.rotation.x = NINTY / 2 * 0.7;
          cube.rotation.y = NINTY / 2;
          cube.rotation.z = NINTY;  
        } else if (DIR == "right") {
          cube.rotation.x = NINTY / 2 * 0.7;
          cube.rotation.y = NINTY / 2 * 3;
          cube.rotation.z = NINTY;  
        } else {
          cube.rotation.x = NINTY / 2;
          cube.rotation.y = NINTY / 2;  
        }
        renderer.render(scene, camera);
      }
    }
    
    //resized shape based on windows
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // window.addEventListener('resize', onWindowResize, false);
    if (cube == null) {
      init();
      animate();  
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div id={ID} className="w-[200px] h-[200px]"></div>
      {/* <canvas id="myThreeJsCanvas2" width="200" height="200" /> */}
    </div>
  );
}

export default FirstCube;
