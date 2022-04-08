import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./Screen.css";
import { useRef } from "react";
import GameScene from "./components/GameScene";

export default function Screen() {
  return (
    <Canvas>
      <GameScene />
    </Canvas>
  );
}

