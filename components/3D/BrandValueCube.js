import { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { motion, useAnimation } from 'framer-motion';

function BrandValueCube(props) {
  let scene, camera, renderer, cube, edges;
  let auto = true;
  let fixAnim = true;

  let ID = "main_cube_" + props.prop_id;
  const DIR = props.direction;

  const TOP = "top";
  const LEFT = "left";
  const RIGHT = "right";
  const DONE = "done";

  const RAD = 6.28319;
  const NINTY = 1.5708;

  const divRef = useRef(null);
  const control = useAnimation();

  useEffect(() => {
    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setClearColor( 0x000000, 0 );
        renderer.setSize(200, 200);
    
        // Create shape
        const geometry = new THREE.BoxGeometry(3, 3, 3);

        const loader = new THREE.TextureLoader();
        const bgColor = 0xFFFFFF;
        const cubeMaterials = [
            new THREE.MeshBasicMaterial({ color : bgColor }), // right side
            (DIR == LEFT ? new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(props.img_src)}) : new THREE.MeshBasicMaterial({ color : bgColor })), // left side
            (DIR == TOP ? new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(props.img_src)}) : new THREE.MeshBasicMaterial({ color : bgColor })), // top side
            new THREE.MeshBasicMaterial({ color : bgColor }), // bottom side
            (DIR == RIGHT ? new THREE.MeshBasicMaterial({ color: bgColor, map: loader.load(props.img_src)}) : new THREE.MeshBasicMaterial({ color : bgColor })), // front side
            new THREE.MeshBasicMaterial({ color : bgColor }), // back side
        ];

        cube = new THREE.Mesh(geometry, cubeMaterials)
        camera.position.z = 5;

        scene.add(cube);

        // Create edges
        const edgeMesh = new THREE.EdgesGeometry(geometry)
        edges = new THREE.LineSegments(edgeMesh, new THREE.LineBasicMaterial({ color:0x000000 }))
        scene.add(edges);

        if (document.getElementById(ID) != null) {
          document.getElementById(ID).appendChild(renderer.domElement);
          document.getElementById(ID).addEventListener("click", function () { fix(); }, false);
        }
    }
    
    function fix() {
      if (auto) {
        auto = false;
        fixAnim = true;
        rotateAnim();
      } else {
        auto = true;
        animate();
      }
    }

    // rotate on event
    function rotateAnim() {
      const amtPerFrame = 0.01;
      if (fixAnim) {
        requestAnimationFrame(rotateAnim);
        if (DIR == LEFT) {
          cube.rotation.x -= amtPerFrame;
          cube.rotation.y += amtPerFrame;
          edges.rotation.x -= amtPerFrame;
          edges.rotation.y += amtPerFrame;
        } else if (DIR == RIGHT) {
          cube.rotation.x -= amtPerFrame;
          cube.rotation.y -= amtPerFrame;
          edges.rotation.x -= amtPerFrame;
          edges.rotation.y -= amtPerFrame;
        } else {
          cube.rotation.x += amtPerFrame;
          cube.rotation.y -= amtPerFrame;
          edges.rotation.x += amtPerFrame;
          edges.rotation.y -= amtPerFrame;
        }
        renderer.render(scene, camera);
      }

      if (DIR == LEFT) {
        if (cube.rotation.x < 0) {
          cube.rotation.x = 0;
          edges.rotation.x = 0;
        }

        if (cube.rotation.y > NINTY) {
          cube.rotation.y = NINTY;
          edges.rotation.y = NINTY;
        }

        if (cube.rotation.x == 0 && cube.rotation.y == NINTY) {
          fixAnim = false;
          props.updateCurStage(DIR == TOP ? LEFT : (DIR == LEFT ? RIGHT : DONE));
        }

        renderer.render(scene, camera);
      } else if (DIR == RIGHT) {
        if (cube.rotation.x < 0) {
          cube.rotation.x = 0;
          edges.rotation.x = 0;
        }

        if (cube.rotation.y < 0) {
          cube.rotation.y = 0
          edges.rotation.y = 0
        }

        if (cube.rotation.x == 0 && cube.rotation.y == 0) {
          fixAnim = false;
          props.updateCurStage(DIR == TOP ? LEFT : (DIR == LEFT ? RIGHT : DONE));
        }

        renderer.render(scene, camera);
      } else {
        if (cube.rotation.x > NINTY) {
          cube.rotation.x = NINTY;
          edges.rotation.x = NINTY;
        }

        if (cube.rotation.y < 0) {
          cube.rotation.y = 0;
          edges.rotation.y = 0;
        }

        if (cube.rotation.x == NINTY && cube.rotation.y == 0) {
          fixAnim = false;
          props.updateCurStage(DIR == TOP ? LEFT : (DIR == LEFT ? RIGHT : DONE));
        }

        renderer.render(scene, camera);
      }
    }

    // default animation
    function animate() {
      requestAnimationFrame(animate);
      if (auto) {
        cube.rotation.x = NINTY / 2 * 0.7;
        cube.rotation.y = NINTY / 2;

        edges.rotation.x = NINTY / 2 * 0.7;
        edges.rotation.y = NINTY / 2;
      }
      renderer.render(scene, camera);
    }
    
    if (cube == null) {
      init();
      animate();
      control.start("visible");
    }
  }, []);
  
  const variant = {
    hidden: { opacity: 0 },
    visible: {
      ease: [0.17, 0.67, 0.83, 0.67],
      opacity: 1,
      transition: {
        duration: 1,
        delay:0.3,
        staggerChildren: 0.8,
      }
    }
  }

  const handleAnimationComplete = () => {
      setTimeout(function() {
        if (document.getElementById(ID) != null) {
          document.getElementById(ID)
          .dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          }));
        }
      }, 500);
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
          ref={divRef}
          animate={control}
          initial="hidden"
          variants={variant}
          onAnimationComplete={handleAnimationComplete}
           >
        <div id={ID} className="w-[200px] h-[200px]" ></div>
      </motion.div>
    </div>
  );
}

export default BrandValueCube;
