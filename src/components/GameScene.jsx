import { useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGameContext } from "../context/gameContext";
import { Suspense, useRef } from "react";
import TieFighter from "../objects/TieFighter";
import MilleniumFalcon from "../objects/MilleniumFalcon";
import Box from "../objects/Box";

const GameScene = () => {
  const { playerPosition, setPlayerPosition, enemyPosition, setEnemyPosition } = useGameContext();

  useThree(({ camera }) => {
    camera.position.z = 0;
    camera.position.y = 10;
    camera.rotation.x = -1.55;
  });

  return (
    <>
      <ambientLight color={0xaaaaaa} />
      <gridHelper args={[20, 20, 20]} />
      <MilleniumFalcon playerPosition={playerPosition} />
      <TieFighter enemyPosition={enemyPosition}/>
    </>
  );
};

export default GameScene;
