import { useState } from 'react'
import Person from './components/Person'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Person name={"Doe, Jane"} age={45} description={"hair Color:Black"}/>
      <Person name={"Smith, John"} age={88} description={"hair Color:Brown"}/>
      
    </>
  )
}

export default App