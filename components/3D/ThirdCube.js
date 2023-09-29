import { useEffect } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './SceneInit';

function ThirdCube() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    // const center = gltfScene.getCenter( new THREE.Vector3() );
    glftLoader.load('/images/aftersale.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      console.log(loadedModel);

    //   gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.x = 0;
      gltfScene.scene.position.y = 0;
      gltfScene.scene.position.z = -1000;
      gltfScene.scene.scale.set(0.6, 0.6, 0.6);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y -= 0.015;
        // loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" width="200" height="200" />
    </div>
  );
}

export default ThirdCube;
