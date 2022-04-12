import { createContext, useState, useContext } from "react";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {

  const [playerPosition, setPlayerPosition] = useState({ x: 0 });

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

  const [enemyPosition, setEnemyPosition] = useState({ x: -7, y: -6 });

  window.addEventListener("keypress", (e) => {
    if (e.key == "z") {

      for (let eixoy = -6; eixoy < 6; eixoy++) {
        for (let eixox = -7; eixox < 7; eixox++) {
          //setTimeout(() => {
            setEnemyPosition({x: enemyPosition.x++})
            console.log(eixoy, eixox, enemyPosition)  
          //}, 3000)
        }
        setEnemyPosition({y: enemyPosition.y++})
        setEnemyPosition({x: -7});
      }
    }
  });

  const value = {
    playerPosition,
    setPlayerPosition,
    enemyPosition,
    setEnemyPosition
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    console.log('me de contexto')
  }

  return context
};

export { GameContextProvider, useGameContext, GameContext };