import { useState } from 'react'
import './App.css'
import HookForm from './components/HookForm'
import Display from './components/Display'


function App() {
  const [personList, setPersonList] = useState([])

  return (
    <>
        <HookForm setPersonList={setPersonList} personList={personList} /> 
        < Display personList={personList} />
          
    </>
  )
}

export default App
