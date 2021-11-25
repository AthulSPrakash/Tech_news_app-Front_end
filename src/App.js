import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/nav'
import Home from './components/home'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const root = document.querySelector(':root')
  // eslint-disable-next-line
  const [source, setSource]  = useState('home')

  function openNav(){
    document.getElementById('myTopnav').classList.toggle('visible')
    document.querySelector('.nav-close-helper').classList.toggle('visible')
  }

  //darkmode toggle----------------------------
  function darkModeOn(){
    root.style.setProperty('--bg', '#121212')
    root.style.setProperty('--text', '#FFFDFD')
    root.style.setProperty('--text-alt', '#1F1B24')
  }
  function darkModeOff(){
    root.style.setProperty('--bg', '#FFFDFD')
    root.style.setProperty('--text', '#070707')
    root.style.setProperty('--text-alt', '#d6dddb')
  }

  useEffect(()=>{
    const btnBall = document.querySelector('.btn-ball')
    const btnInd = document.querySelector('.fa-sun') || document.querySelector('.fa-moon')
    if(darkMode){
      btnBall.classList.add('toggle')
      btnInd.classList.replace('fa-sun','fa-moon')
    }else{
      btnBall.classList.remove('toggle')
      btnInd.classList.replace('fa-moon','fa-sun')
    }
    darkMode ? darkModeOn() : darkModeOff()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode])

  function toggleDarkMode(){
    setDarkMode(prevMode=> !prevMode)
  }
  //---------------------------------------------

  // function toggleNewsSection(){
  //   document.querySelector('.news-section').classList.toggle('visible')
  // }

  // function openSPecificNews(prop){
  //   setSource(prop)
  // }

  return (
    <div className="App">
      <Nav toggleMode={toggleDarkMode} navBar={openNav}/>
      <Home section={source}/>
    </div>
  )
}

export default App
