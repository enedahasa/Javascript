import { useState } from 'react'
import Display from './assets/components/Display'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <>
     <Display  pokemon={pokemon} setPokemon={setPokemon} />
    </>
  )
}

export default App
