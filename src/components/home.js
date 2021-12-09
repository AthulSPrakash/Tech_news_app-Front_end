import { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import uniqid from 'uniqid'
require('dotenv').config()

export default function Home(){
    const  base = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/'

    const [techCrunch, setTechCrunch] = useState([])
    const [wired, setWired] = useState([])
    const [verge, setVerge] = useState([])
    const [ventureBeat, setVentureBeat] = useState([])
    const [gsmArena, setGsmArena] = useState([])
    const [engadget, setEngadget] = useState([])
    const [gizmodo, setGizmodo] = useState([])
    const [digitalTrends, setDigitalTrends] = useState([])
    const [techRadar, setTechRadar] = useState([])
    const [nineTo5Mac, setNineTo5Mac] = useState([])
    const [androidAuthority, setAndroidAuthority] = useState([])

    function connect(prop,setProp){
        fetch(base + prop)
        .then(res=>res.json())
        .then(data=>setProp(data))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        connect('techcrunch',setTechCrunch)
        connect('wired',setWired)
        connect('verge',setVerge)
        connect('venturebeat',setVentureBeat)
        connect('gizmodo',setGizmodo)
        connect('engadget',setEngadget)
        connect('nineto5mac',setNineTo5Mac)
        connect('digitaltrends',setDigitalTrends)
        connect('techradar',setTechRadar)
        connect('gsmarena',setGsmArena)
        connect('androidauthority',setAndroidAuthority)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function render(data){
        const news = data.map(item=>{
            return(
                <LazyLoad key={uniqid()} offset={500}>
                    <div className="news-card" onClick={()=>openArticle(item.link)}>
                        <img 
                            className="news-img" 
                            src={ item.img || 'https://picsum.photos/id/181/220/150' } 
                            alt="news" 
                            onError={handleImage}/>
                        <p className="news-title">{item.title}</p>
                        <a className="news-link" href={item.link}>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </LazyLoad>
            )         
        })
        return news
    }
    function openArticle(url){
        window.open(url, '_self')
    }
    function handleImage(e){
        e.target.src = 'https://picsum.photos/id/181/220/150'
    }

    const sources = [
        {
            name:'TechCrunch',
            content: render(techCrunch)
        },
        {
            name:'Wired',
            content: render(wired)
        },
        {
            name:'The Verge',
            content: render(verge)
        },
        {
            name:'VentureBeat',
            content: render(ventureBeat)
        },
        {
            name:'engadget',
            content: render(engadget)
        },
        {
            name:'9To5Mac',
            content: render(nineTo5Mac)
        },
        {
            name:'Digital Trends',
            content: render(digitalTrends)
        },
        {
            name:'Tech Radar',
            content: render(techRadar)
        },
        {
            name:'GSMArena',
            content: render(gsmArena)
        },
        {
            name:'Gizmodo',
            content: render(gizmodo)
        },
        {
            name:'Android Authority',
            content: render(androidAuthority)
        }
    ]

    return(
        <div className="home-section">
            {sources.map(item=>{
                return(
                    <LazyLoad key={uniqid()} offset={200}>
                        <section className="news-source">
                            <h1 className="source-name">{item.name}</h1>
                            <div className="news-list">
                                {item.content}
                            </div>
                        </section>
                        <hr style={{border: '1px solid var(--bg)'}}/>
                    </LazyLoad>
                )
            })}
        </div>
    )
}