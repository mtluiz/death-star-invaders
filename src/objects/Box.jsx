import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import { useRef } from "react";
import { useGameContext } from "../context/gameContext";

export default function Box(props) {

  const ref = useRef(null);
  useFrame((state, delta) => {
    ref.current.rotation.x += 1;
    ref.current.position.y = -6;
    ref.current.position.x = 0;
  });


  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
