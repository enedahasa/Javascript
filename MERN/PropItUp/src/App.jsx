import { useState } from 'react'
import Personcard from './component/Personcard'
import './App.css'


function App() {

  return (
    <>

      <Personcard name={"Doe, Jane"} age={45} description={"Black"}/>
      <Personcard name={"Smith, Johne"} age={88} description={"Brown"}/>
      <Personcard name={"Fillmore, Millard"} age={50} description={"Brown"}/>
      <Personcard name={"Smith, Maria"} age={62} description={"Brown"}/>

    </>
 )
}

export default App
