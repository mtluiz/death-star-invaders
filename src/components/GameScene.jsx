import { useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGameContext } from "../context/gameContext";
import { Suspense, useRef } from "react";
import TieFighter from "../objects/TieFighter";
import MilleniumFalcon from "../objects/MilleniumFalcon";
import Shot from "../objects/Shot";

const GameScene = () => {
  const { playerPosition, setPlayerPosition, enemyPosition, setEnemyPosition } = useGameContext();

  useThree(({ camera }) => {
    camera.position.z = 6;
    camera.position.y = 14;
    camera.rotation.x = -1.10;
  });

  return (
    <>
      <ambientLight color={0xaaaaaa} />
      <gridHelper args={[20, 20, 20]} />
      <Shot />
      <MilleniumFalcon playerPosition={playerPosition} />
      <TieFighter enemyPosition={enemyPosition}/>
    </>
  );
};

export default GameScene;
