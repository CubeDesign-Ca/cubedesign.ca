import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ThreeJSGltfRotation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Load the glTF model
    const loader = new GLTFLoader();
    loader.load("/images/main_banner_final.gltf", (gltf) => {
      const model = gltf.scene;
      const pivot = new THREE.Object3D(); // Create a pivot object
      pivot.add(model); // Add the model to the pivot
      scene.add(pivot); // Add the pivot to the scene

      // Change the pivot point position to modify the rotation axis
      pivot.position.set(0, 0, 0); // Change the x, y, z values as per your desired position

      // Rotate the pivot to rotate the model around the new axis
      pivot.rotation.y = 0; // Change the angle value as per your desired rotation

      // Render the scene
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });

    // // Clean up on unmount
    // return () => {
    //   renderer.dispose();
    //   canvasRef.current.removeChild(renderer.domElement);
    // };
  }, []);

  return <div ref={canvasRef} />;
};

export default ThreeJSGltfRotation;
