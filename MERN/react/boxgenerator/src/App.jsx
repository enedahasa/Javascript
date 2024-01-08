import { useState } from 'react'

import './App.css'
import Form from './assets/components/Forms'
import Display from './assets/components/Display'



function App() {
  const [box, setBox] = useState([])

  const [color, setColor]= useState([])

  return (
    <>
    <Form box={box} setBox={setBox} />
    <Display box={box} setBox={setBox} />
      
    </>
  )
}

export default App
