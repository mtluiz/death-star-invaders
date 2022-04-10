import { createContext, useState, useContext } from "react";

const GameContext = createContext();

const GameContextProvider = ({children}) => {

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

  const value = {
    playerPosition,
    setPlayerPosition
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