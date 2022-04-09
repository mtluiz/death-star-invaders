import { GameContextProvider, useGameContext } from "./context/gameContext";
import { Canvas } from "@react-three/fiber";
import GameScene from "./components/GameScene";
import "./Screen.css";

export default function Screen() {

  return (
    <Canvas>
      <GameContextProvider>
        <GameScene />
      </GameContextProvider>
    </Canvas>
  );
}
