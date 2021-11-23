import React, { useState, useEffect } from 'react'
import './App.css'
require('dotenv').config()

function App() {

  const  base = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/'
  const [darkMode, setDarkMode] = useState(false)
  const [source, setSource] = useState('wired')
  
  useEffect(()=>{
    fetch(base + source)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }, [source])

  function openNav(){
    const nav = document.getElementById("myTopnav")
    if (nav.className === "topnav") {
      nav.className += " responsive"
    }else{
      nav.className = "topnav"
    }
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
  }, [darkMode])

  function toggleDarkMode(){
    setDarkMode(prevMode=> !prevMode)
  }

  return (
    <div className="App">
      <nav className="topnav" id="myTopnav">
        <button id="home" className="active">Home</button>
        <button id="news">News</button>
        <button id="contact">Contact</button>
        <button id="about">About</button>
        <div aria-label="dark mode switch" onClick={toggleDarkMode} className="toggle-btn">
          <div className="btn-ball">
            <i className="fas fa-sun"></i>
          </div>
        </div>
        <button id="nav" className="icon" onClick={openNav}>
          <i className="fa fa-bars"></i>
        </button>
      </nav>

      <div className="home">
        <h1>News</h1>
      </div>
    </div>
  )
}

export default App
