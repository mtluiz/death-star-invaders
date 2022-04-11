import { useFrame } from '@react-three/fiber'
import React from 'react'
import Box from '../objects/Box'
import { useGameContext } from '../context/gameContext'


export default function GameScene() {

  const { playerPosition } = useGameContext();

  return (
    <>
      <Box playerPosition={playerPosition} />
    </>
  )
}


