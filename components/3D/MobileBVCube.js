import { useEffect } from 'react';

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function MBVCube(props) {
  let scene, camera, renderer, raycaster, cube;
  let mouse = new THREE.Vector2();

  const updateBrandValue = props.update;
  const resetBrandValue = props.reset;
  let ID = "main_cube";

  const CUBE1_IMG = "../images/3d_one_stop.png";
  const CUBE2_IMG = "../images/3d_trust.png";
  const CUBE3_IMG = "../images/3d_after_sales.png";

  const RAD = 6.28319;
  const NINTY = 1.5708;

  const LEFT = "LEFT";
  const RIGHT = "RIGHT";
  const TOP = "TOP";
  const BOT = "BOTTOM";
  const FRONT = "FRONT";
  const BACK = "BACK";

  const amtPerFrame = 0.01;
  let runAnim = true;

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

      const mesh = new THREE.Mesh(geometry, materials)
      camera.position.z = 5;

      // Create edges
      const edgeMesh = new THREE.EdgesGeometry(geometry)
      const edge = new THREE.LineSegments(edgeMesh, new THREE.LineBasicMaterial({ color: 0x000000 }))

      // Group mesh and edges
      cube = new THREE.Group();
      cube.add(mesh);
      cube.add(edge);
      cube.rotation.set(NINTY / 2 * 0.7, NINTY / 2, 0);

      scene.add(cube);

      // Controller
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener('change', render);
      controls.minDistance = 5;
      controls.maxDistance = 5;
      controls.enablePan = false;

      // Init Raycaster
      raycaster = new THREE.Raycaster();

      // Mouse click event to change the title and description
      renderer.domElement.addEventListener("click", function (e) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        // Find which face is clicked by the user
        let intersects = raycaster.intersectObjects(scene.children);
        for (let i = 0; i < intersects.length; i++) {
          if (intersects[i].object.isMesh && intersects[i].object.isObject3D) {
            let face = intersects[i].face;
            if ((face.a == 6 && face.b == 7 && face.c == 5) || (face.a == 4 && face.b == 6 && face.c == 5)) { // left
              dir = LEFT;
              updateBrandValue("ONESTOP");
            } else if ((face.a == 0 && face.b == 2 && face.c == 1) || (face.a == 2 && face.b == 3 && face.c == 1)) { // right
              dir = RIGHT;
              updateBrandValue("ONESTOP");
            } else if ((face.a == 8 && face.b == 10 && face.c == 9) || (face.a == 10 && face.b == 11 && face.c == 9)) { // top
              dir = TOP;
              updateBrandValue("TRUSTWORTHY");
            } else if ((face.a == 12 && face.b == 14 && face.c == 13) || (face.a == 14 && face.b == 15 && face.c == 13)) { // bottom
              dir = BOT;
              updateBrandValue("TRUSTWORTHY");
            } else if ((face.a == 22 && face.b == 23 && face.c == 21) || (face.a == 20 && face.b == 22 && face.c == 21)) { // back
              dir = BACK;
              updateBrandValue("AFTERSALES");
            } else if ((face.a == 16 && face.b == 18 && face.c == 17) || (face.a == 18 && face.b == 19 && face.c == 17)) { // front
              dir = FRONT;
              updateBrandValue("AFTERSALES");
            }
          }
        }

        // runRot = true;
        // if (rotateId != null) {
        //   cancelAnimationFrame(rotateId);
        // }
        // rotate();
      }, false); // end of event listener

      renderer.domElement.addEventListener("mousedown", function (e) {
        resetBrandValue();
      });

      if (document.getElementById(ID) != null) {
        document.getElementById(ID).appendChild(renderer.domElement);
      }
    }

    let rotateId;
    let dir = null;
    let runRot = false;
    function rotate() {
      // FRONT 0 0 0
      // BACK 0 180 0
      // LEFT 0 90 0
      // RIGHT 0 -90 0
      // TOP 90 0 0
      // BOTTOM -90 0 0
      if (!runRot) {
        return;
      }

      rotateId = requestAnimationFrame(rotate);
      if (dir == FRONT) {
        if (cube.rotation.x < -amtPerFrame) {
          cube.rotation.x += amtPerFrame;
        } else if (cube.rotation.x > amtPerFrame) {
          cube.rotation.x -= amtPerFrame;
        } else {
          cube.rotation.x = 0;
        }

        if (cube.rotation.y < -amtPerFrame) {
          cube.rotation.y += amtPerFrame;
        } else if (cube.rotation.y > amtPerFrame) {
          cube.rotation.y -= amtPerFrame;
        } else {
          cube.rotation.y = 0;
        }

        if (cube.rotation.z < -amtPerFrame) {
          cube.rotation.z += amtPerFrame;
        } else if (cube.rotation.z > amtPerFrame) {
          cube.rotation.z -= amtPerFrame;
        } else {
          cube.rotation.z = 0;
        }

        if (cube.rotation.x == 0 && cube.rotation.y == 0 && cube.rotation.z == 0) {
          runAnim = true;
          runRot = false;
          cube.updateMatrixWorld(true);
        }
      }

      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    function animate() {
      if (!runAnim) {
        return;
      }
      requestAnimationFrame(animate);
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
