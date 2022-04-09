import React from 'react'
import Screen from './Screen'
import { createRoot } from 'react-dom/client'
import './Screen.css'
const macaco = "a"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<div className='Screen'><Screen /></div>)


