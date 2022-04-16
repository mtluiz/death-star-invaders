import { useRef, useState } from "react";
import { GameContextProvider, useGameContext } from "./context/gameContext";
import { Canvas } from "@react-three/fiber";
import GameScene from "./components/GameScene";
import "./Screen.css";
import "./Screen";

import StartMenu from "./components/StartMenu";

export default function Screen() {
  const [gameBegin, setGameBegin] = useState(false);

  const shot = useRef(null);

  window.addEventListener("keypress", (e) => {
    if (e.key == " ") {
      shot.current.currentTime = 0;
      shot.current.volume = 0.3;
      shot.current.play();
    }
  });

  return (
    <>
      <audio ref={shot} src="./src/assets/audio/laser-shot.mp3"></audio>

      {gameBegin ? (
        <Canvas>
          <GameContextProvider>
            <GameScene />
          </GameContextProvider>
        </Canvas>
      ) : (
        <StartMenu begin={()=>{ setGameBegin(true) }} />
      )}
    </>
  );
}

/*


  */
