import { createContext, useState } from "react";

const GameContext = createContext({});

const GameContextProvider = (children) => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0 });

  return (
    <GameContext.Provider value={{ playerPosition, setPlayerPosition }}>
      {children}
    </GameContext.Provider>
  );
};

