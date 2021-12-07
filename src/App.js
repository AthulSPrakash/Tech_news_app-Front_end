import React, { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Home from './components/home'

function App() {

  // eslint-disable-next-line
  const [source, setSource]  = useState('home')

  function openNav(){
    document.getElementById('myTopnav').classList.toggle('visible')
    document.querySelector('.nav-close-helper').classList.toggle('visible')
  }

  return (
    <div className="App">
      <Nav navBar={openNav}/>
      <Home section={source}/>
    </div>
  )
}

export default App
