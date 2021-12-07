import { useState, useEffect } from 'react'

export default function Nav(props){

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

    return(
        <>
        <nav className="topnav" id="myTopnav">
            <button id="home" className="active">Home</button>
            <button id="contact">Contact</button>
            <button onClick={props.navBar} id="close">Close</button>
        </nav>

        <div onClick={props.navBar} className="nav-close-helper"></div>
        <div className="btn-container">
            <div className="drop-down" onClick={props.navBar}>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </div>
        </div>
        <div aria-label="dark mode switch" onClick={toggleDarkMode} className="toggle-btn">
            <div className="btn-ball">
            <i className="fas fa-sun"></i>
            </div>
        </div>
        </>
    )
}