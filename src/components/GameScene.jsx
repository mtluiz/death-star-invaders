import React from 'react'
import Box from '../objects/Box'

export default function GameScene() {

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      console.log('aperto enter')
    }
  })

  return (
    <>
        <Box onKeyPress={()=>{console.log('a')}} />
    </>
  )
}


