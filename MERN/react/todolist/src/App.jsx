import react, { useState } from 'react'

import Form from './assets/components/Form'
import Display from './assets/components/Display'
import './App.css'

function App() {
  const [form, setForm] = useState([])
  return (
    <>
      <Form form={form} setForm={setForm} />
      <Display form={form} setForm={setForm}/>
    </>
  )
}

export default App
