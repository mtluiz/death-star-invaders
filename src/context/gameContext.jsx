import { createContext, useState, useContext } from "react";

const GameContext = createContext({});

const GameContextProvider = (children) => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0 });


  window.addEventListener('keypress', (a, d) => {
    if (d.key === 'Enter') {
      setPlayerPosition(playerPosition.x = +1)
      console.log(playerPosition.x)
    }

    if (a.key === 'Enter') {
      setPlayerPosition(playerPosition.x = -1)
      console.log(playerPosition.x)
    }
  })

  return (
    <GameContext.Provider value={playerPosition}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext)
  return context
}

export { useGameContext, GameContextProvider}