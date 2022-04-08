import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import { useRef } from "react";

export default function Box(props) {
  const ref = useRef(null);

  

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1;
    ref.current.position.y = -3;
  });
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
