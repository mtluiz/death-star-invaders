import { Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ObjectImporter({asset, position}) {
  const tie = useLoader(
    GLTFLoader,
    asset
  );

  return (
    <Suspense fallback={null}>
      <primitive
        object={tie.scene}
        scale={0.001}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </Suspense>
  );
}