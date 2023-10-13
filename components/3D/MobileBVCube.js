import { useEffect, useRef } from 'react';

import * as THREE from 'three';
// import { Interaction } from 'three.interaction';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function MBVCube(props) {
  let scene, camera, renderer, cube, edges, raycaster;
  let INTERSECTED;
  let mouse = new THREE.Vector2();
  let auto = true;
  const pointer = new THREE.Vector2();

  const updateBrandValue = props.update;
  const resetBrandValue = props.reset;
  let ID = "main_cube";

  const CUBE1_IMG = "../images/3d_one_stop.png";
  const CUBE2_IMG = "../images/3d_trust.png";
  const CUBE3_IMG = "../images/3d_after_sales.png";

  const RAD = 6.28319;
  const NINTY = 1.5708;

  useEffect(() => {
    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(200, 200);

      // Create shape
      const geometry = new THREE.BoxGeometry(3, 3, 3);

      const loader = new THREE.TextureLoader();
      const bgColor = 0xFFFFFF;
      const materials = [
        new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(CUBE1_IMG) }), // right side
        new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(CUBE1_IMG) }), // left side
        new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(CUBE2_IMG) }), // top side
        new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(CUBE2_IMG) }), // bottom side
        new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(CUBE3_IMG) }), // front side
        new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(CUBE3_IMG) }), // back side
      ];

      cube = new THREE.Mesh(geometry, materials)
      camera.position.z = 5;

      scene.add(cube);

      // Create edges
      const edgeMesh = new THREE.EdgesGeometry(geometry)
      edges = new THREE.LineSegments(edgeMesh, new THREE.LineBasicMaterial({ color: 0x000000 }))
      scene.add(edges);

      // Controller
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener('change', render);
      controls.minDistance = 5;
      controls.maxDistance = 5;
      controls.enablePan = false;

      // Init Raycaster
      raycaster = new THREE.Raycaster();

      // Mouse click event to change the title and description
      renderer.domElement.addEventListener("mouseup", function (e) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        // Find which face is clicked by the user
        let intersects = raycaster.intersectObjects(scene.children);
        for (let i = 0; i < intersects.length; i++) {
          if (intersects[i].object.isMesh && intersects[i].object.isObject3D) {
            let face = intersects[i].face;
            if ((face.a == 6 && face.b == 7 && face.c == 5) || (face.a == 4 && face.b == 6 && face.c == 5) // left
              || (face.a == 0 && face.b == 2 && face.c == 1) || (face.a == 2 && face.b == 3 && face.c == 1)) { // right
              resetBrandValue();
              console.log(face);
              updateBrandValue("ONESTOP");
            } else if ((face.a == 8 && face.b == 10 && face.c == 9) || (face.a == 10 && face.b == 11 && face.c == 9) // top
              || (face.a == 12 && face.b == 14 && face.c == 13) || (face.a == 14 && face.b == 15 && face.c == 13)) { // bottom
              resetBrandValue();
              console.log(face);
              updateBrandValue("TRUSTWORTHY");
            } else if ((face.a == 22 && face.b == 23 && face.c == 21) || (face.a == 20 && face.b == 22 && face.c == 21) // back
              || (face.a == 16 && face.b == 18 && face.c == 17) || (face.a == 18 && face.b == 19 && face.c == 17)) { // front
              resetBrandValue();
              console.log(face);
              updateBrandValue("AFTERSALES");
            }
          }
        }

        render();
      }, false);

      let rotateId;
      const rotate = () => {
        const amtPerFrame = 0.01;

        // rotateId = requestAnimationFrame(rotate);
        if (!auto) {
          console.log(cube.rotation.x);
          console.log(cube.rotation.y);
          console.log(cube.rotation.z);
          console.log(edges.rotation.x);
          console.log(edges.rotation.y);
          console.log(edges.rotation.z);  
        }
        // console.log(cube.rotation.x);
        // console.log(cube.rotation.y);
        // console.log(cube.rotation.z);

        // cube.rotation.x += amtPerFrame;
        // cube.rotation.y -= amtPerFrame;
        // cube.rotation.z += amtPerFrame;
        // edges.rotation.x += amtPerFrame;
        // edges.rotation.y -= amtPerFrame;
        // edges.rotation.z += amtPerFrame;

        // console.log(rotateId);
        // rotated = true;
        // console.log("hihi")
        // auto = true;
        // animate();

        // const amtPerFrame = 0.01;
        // requestAnimationFrame(rotate);
        
        // cube.rotation.x -= amtPerFrame;
        // cube.rotation.y += amtPerFrame;
        // edges.rotation.x -= amtPerFrame;
        // edges.rotation.y += amtPerFrame;
        render();
        // cancelAnimationFrame(rotateId);
      }

      // Rotate the cube to be visible properly 
      renderer.domElement.addEventListener("mouseup", function (e) {
        auto = false;
        if (animateId) {
          console.log("Cancelling animate " + animateId);
          cancelAnimationFrame(animateId);
        }
        if (rotateId) {
          console.log("Cancelling rotate " + rotateId);
          cancelAnimationFrame(rotateId);
        }
        rotate();
      }, false);

      if (document.getElementById(ID) != null) {
        document.getElementById(ID).appendChild(renderer.domElement);
      }
    }

    function render() {
      renderer.render(scene, camera);
    }

    let animateId;
    function animate() {
      animateId = requestAnimationFrame(animate);
      cube.rotation.x = NINTY / 2 * 0.7;
      cube.rotation.y = NINTY / 2;

      edges.rotation.x = NINTY / 2 * 0.7;
      edges.rotation.y = NINTY / 2;
      render();
    }

    if (cube == null) {
      init();
      animate();
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div id={ID} className="w-[200px] h-[200px]" ></div>
    </div>
  );
}

export default MBVCube;
