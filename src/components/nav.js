export default function Nav(props){
    return(
        <>
        <nav className="topnav" id="myTopnav">
            <button id="home" className="active">Home</button>
            {/* <button onMouseOver={props.newsSection} onMouseOut={props.newsSection} id="news">
                News
                <nav className="news-section">
                    <button onClick={()=>props.openSPecificNews()}>TechCrunch</button>
                    <button onClick={()=>props.openSPecificNews()}>Gizmodo</button>
                    <button onClick={()=>props.openSPecificNews()}>Wired</button>
                    <button onClick={()=>props.openSPecificNews()}>The Verge</button>
                    <button onClick={()=>props.openSPecificNews()}>VentureBeat</button>
                    <button onClick={()=>props.openSPecificNews()}>engadget</button>
                    <button onClick={()=>props.openSPecificNews()}>9To5Mac</button>
                    <button onClick={()=>props.openSPecificNews()}>Digital Trends</button>
                    <button onClick={()=>props.openSPecificNews()}>TechRadar</button>
                    <button onClick={()=>props.openSPecificNews()}>GSMArena</button>
                    <button onClick={()=>props.openSPecificNews()}>Android Authority</button>
                    <button onClick={()=>props.openSPecificNews()}>Gadget Review</button>
                </nav>
            </button> */}
            <button id="contact">Contact</button>
            {/* <button id="about">About</button> */}
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
        <div aria-label="dark mode switch" onClick={props.toggleMode} className="toggle-btn">
            <div className="btn-ball">
            <i className="fas fa-sun"></i>
            </div>
        </div>
        </>
    )
}