import { useRef } from "react";
import { GameContextProvider, useGameContext } from "./context/gameContext";
import { Canvas } from "@react-three/fiber";
import GameScene from "./components/GameScene";
import "./Screen.css";
import "./Screen"

export default function Screen() {

  const shot = useRef(null)

  window.addEventListener("keypress", (e) => {

    if (e.key == "f") {
      shot.current.currentTime = 0
      shot.current.volume = 0.3
      shot.current.play()
      console.log("tiro")
    }
  })

  return (
    <>
    <audio ref={shot} src="./src/assets/audio/laser-shot.mp3"></audio>
    <Canvas>
      <GameContextProvider>
        <GameScene />
      </GameContextProvider>
    </Canvas>
    </>
  );
} 
