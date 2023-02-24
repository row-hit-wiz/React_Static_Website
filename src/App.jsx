import React from 'react'
import { useState } from 'react'
import './App.css'
import Main from '../component/Main'
import Navbar from '../component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}

export default App
 