import { Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MilleniumFalcon({playerPosition}) {
  const tie = useLoader(
    GLTFLoader,
    "./src/assets/3d-models/millenium-falcom/scene.gltf"
  );

  return (
    <Suspense fallback={null}>
      <primitive
        object={tie.scene}
        scale={0.0032}
        position={[playerPosition.x, 0, 5]}
        rotation={[0, Math.PI, 0]}
      />
    </Suspense>
  );
}
