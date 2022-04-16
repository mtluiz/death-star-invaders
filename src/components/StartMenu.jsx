import React from 'react'

export default function StartMenu({begin}) {

  window.addEventListener('click', ()=> {
    begin()
  })

  return (
    <div className='start-menu'>

        <img src="https://wallpapercave.com/wp/KiH7afw.png" alt="" />


        <ul className="options">
            <li> <h1>PRESS ENTER OR CLICK TO START</h1> </li>
        </ul>

    </div>
  )
}
