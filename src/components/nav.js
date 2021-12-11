import { useState, useEffect } from 'react'
import '../styles/nav.css'

export default function Nav({page, backToHome, navBar}){

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('night')) || false)
    localStorage.setItem('night', JSON.parse(darkMode))
    const root = document.querySelector(':root')
    
    //darkmode toggle----------------------------
    function darkModeOn(){
        root.style.setProperty('--bg', '#121212')
        root.style.setProperty('--text', '#FFFDFD')
        root.style.setProperty('--text-alt', '#1b1b24')
    }
    function darkModeOff(){
        root.style.setProperty('--bg', '#FFFDFD')
        root.style.setProperty('--text', '#070707')
        root.style.setProperty('--text-alt', '#d6dddb')
    }

    useEffect(()=>{
        const btnBall = document.querySelector('.btn-ball')
        const logo = document.querySelector('.logo')
        const btnInd = document.querySelector('.fa-sun') || document.querySelector('.fa-moon')
        if(darkMode){
            btnBall.classList.add('toggle')
            btnInd.classList.replace('fa-sun','fa-moon')
            logo && logo.classList.add('invert')
        }else{
            btnBall.classList.remove('toggle')
            btnInd.classList.replace('fa-moon','fa-sun')
            logo && logo.classList.remove('invert')
        }
        darkMode ? darkModeOn() : darkModeOff()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [darkMode])

    useEffect(()=>{
        const logo = document.querySelector('.logo')
        if(darkMode){
            logo && logo.classList.add('invert')
        }else{
            logo && logo.classList.remove('invert')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])

    function toggleDarkMode(){
        setDarkMode(prevMode=> !prevMode)
    }
    //---------------------------------------------

    return(
        <>
        <nav className="topnav" id="myTopnav">
            <button onClick={backToHome} id="home" className="active">Home</button>
            <button id="contact">Contact</button>
            <button onClick={navBar} id="close">Close</button>
        </nav>
        <div onClick={navBar} className="nav-close-helper"></div>

        {page ?
            <div className="btn-container" onClick={backToHome}>
                <i className="fas fa-arrow-left"></i>
            </div>  
        :
            <div className="btn-container">
                <div className="drop-down" onClick={navBar}>
                    <div className="bars"></div>
                    <div className="bars"></div>
                    <div className="bars"></div>
                </div>
            </div>
        }
        
        <div aria-label="dark mode switch" onClick={toggleDarkMode} className="toggle-btn">
            <div className="btn-ball">
            <i className="fas fa-sun"></i>
            </div>
        </div>
        </>
    )
}