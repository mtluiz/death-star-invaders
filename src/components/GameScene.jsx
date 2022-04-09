import { useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGameContext } from "../context/gameContext";
import { Suspense, useRef } from "react";
import Box from "../objects/Box";

const GameScene = () => {
  const { playerPosition, setPlayerPosition } = useGameContext();

  const tie = useLoader(
    GLTFLoader,
    "./src/assets/3d-models/tie_interceptor/scene.gltf"
  );

  const millenium = useLoader(
    GLTFLoader,
    "./src/assets/3d-models/millenium-falcom/scene.gltf"
  );

  useThree(({ camera }) => {
    camera.position.z = 10;
  });

  window.addEventListener("keypress", (e) => {
    if (e.key == "a") {
      if (playerPosition.x > -10)
        setPlayerPosition({ x: playerPosition.x - 1 });
    }
  });

  window.addEventListener("keypress", (e) => {
    if (e.key == "d") {
      if (playerPosition.x < 10) setPlayerPosition({ x: playerPosition.x + 1 });
    }
  });

  return (
    <>
      <ambientLight color={0xaaaaaa} />
      <Box playerPosition={playerPosition} />

      <gridHelper args={[10, 10, 10]} />

      <Suspense fallback={null}>
        <primitive
          object={tie.scene}
          scale={0.4}
          position={[-6, 2, -3]}
          rotation={[0.1, 0.6, 0]}
        />
      </Suspense>
    </>
  );
};

export default GameScene;
