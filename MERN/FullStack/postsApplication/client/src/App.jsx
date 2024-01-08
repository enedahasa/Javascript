
import './/App.css'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Dashboard from './components/Dashboard';
import EditPost from './components/EditPost';
import SinglePost from './components/SinglePost';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/posts' element={<Dashboard/>} />
    <Route path='/posts/:id' element={<SinglePost/>} />
    <Route path='/posts/edit/:id' element={<EditPost/>} />
    <Route path='/posts/create' element={<CreatePost/>} />
   </Routes>

   </BrowserRouter>
  )
}

export default App
