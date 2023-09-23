import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const gltf = useLoader(GLTFLoader, "./planet/scene.gltf");

  // Check the position attribute for NaN values
  const position = useMemo(() => gltf?.attributes?.position?.array ?? [], [gltf]);
  const hasNaN = position.some((value) => isNaN(value));
  if (hasNaN) {
    console.warn("The position attribute contains NaN values.");
  }

  // Set default values for scale, position, and rotation
  const defaultScale = [10, 10, 10];
  const defaultPosition = [0, 0, 0];
  const defaultRotation = [0, 0, 0];

  return (
    <group scale={defaultScale} position={defaultPosition} rotation={defaultRotation}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />
      <CanvasLoader />
    </Canvas>
  );
};

export default EarthCanvas;