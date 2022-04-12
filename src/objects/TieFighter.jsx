import { Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function TieFighter(enemyPosition) {
  const tie = useLoader(
    GLTFLoader,
    "./src/assets/3d-models/tie-interceptor/scene.gltf"
  );


  return (
    <Suspense fallback={null}>
      <primitive
        object={tie.scene}
        scale={0.4}
        position={[enemyPosition.x, 0, enemyPosition.y]}
        rotation={[0, 0, 0]}
      />
    </Suspense>
  );
}
