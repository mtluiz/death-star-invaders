import { useThree } from '@react-three/fiber';
import { useGameContext } from '../context/gameContext';
import Box from '../objects/Box'

const GameScene = () => {

  const {playerPosition, setPlayerPosition} = useGameContext()
  
  useThree(({camera}) => {
    console.log(camera)
  })

  window.addEventListener('keypress', (e) => {
    if (e.key == 'a') {
      if(playerPosition.x > -6) setPlayerPosition({x: playerPosition.x - 1})
    }
  })


  window.addEventListener('keypress', (e) => {
    if (e.key == 'd') {
      if(playerPosition.x < 6) setPlayerPosition({x: playerPosition.x + 1})
    }
  })


  return (
        <Box playerPosition={playerPosition}/>
  )
}

export default GameScene;


