import React from 'react'
import './styles/App.css'
import Fetch from './components/fetch'
import Main from './components/Main'
require('dotenv').config()

function App() {
  const  base = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/'
  const data = Fetch(base)

  return (
    <div className="App">
      <Main news={data}/>
    </div>
  )
}

export default App
