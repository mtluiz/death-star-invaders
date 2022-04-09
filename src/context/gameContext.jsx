import { createContext, useState, useContext } from "react";

const GameContext = createContext();

const GameContextProvider = ({children}) => {

  const [playerPosition, setPlayerPosition] = useState({ x: 0 });

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