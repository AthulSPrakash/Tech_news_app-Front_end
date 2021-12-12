import { useState } from 'react'
import Nav from './nav'
import Home from './home'
import IndvPage from './indvPage'

export default function Main({news}){
    const [page, setPage]  = useState({
        section: false,
        logo: '',
        content: ''
    })

    function openPage(image,data){
        setPage(prevPage=>{
            return({
                section: !prevPage.section,
                logo: image,
                content: data
            })
        })
    }

    function backToHome(){
        if(page.section===true){
            setPage(prevPage=>{
                return({
                    ...prevPage,
                    section: !prevPage.section
                })
            })
        }
    }

    function openNav(){
        document.getElementById('myTopnav').classList.toggle('visible')
        document.querySelector('.nav-close-helper').classList.toggle('visible')
    }

    return(
        <>
            <Nav page={page.section} backToHome={backToHome} navBar={openNav}/>
            { page.section ? 
                <IndvPage page={page.section} logo={page.logo} data={news} array={page.content}/>
                : 
                <Home page={page.section} openPage={openPage} data={news}/>
            }
        </>
    )
}