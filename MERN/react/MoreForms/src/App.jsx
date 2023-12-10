import { useState } from 'react'
import './App.css'
import Forms from './assets/component/Forms'
import Display from './assets/component/Display'

function App() {
  const [personList, setPersonList] = useState([])


  return (
    <>

        <Forms setPersonList={setPersonList} personList={personList} /> 
        < Display personList={personList} />

    </>

  )
}

export default App;
