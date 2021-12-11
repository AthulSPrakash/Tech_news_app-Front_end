import LazyLoad from 'react-lazyload'
import uniqid from 'uniqid'
import '../styles/home.css'
import Render from './render'

export default function Home({openPage, data}){

    const sources = [
        {
            name:'Wired',
            logo: './images/wired.svg',
            content: Render(data.wired)
        },
        {
            name:'TechCrunch',
            logo: './images/techcrunch.png',
            content: Render(data.techCrunch)
        },
        {
            name:'The Verge',
            logo: './images/verge.svg',
            content: Render(data.verge)
        },
        {
            name:'VentureBeat',
            logo: './images/venturebeat.png',
            content: Render(data.ventureBeat)
        },
        {
            name:'engadget',
            logo: './images/engadget.png',
            content: Render(data.engadget)
        },
        {
            name:'9To5Mac',
            logo: './images/9to5mac.png',
            content: Render(data.nineTo5Mac)
        },
        {
            name:'Digital Trends',
            logo: './images/dt.png',
            content: Render(data.digitalTrends)
        },
        {
            name:'Tech Radar',
            logo: './images/tr.png',
            content: Render(data.techRadar)
        },
        {
            name:'GSMArena',
            logo: './images/gsmarena.png',
            content: Render(data.gsmArena)
        },
        {
            name:'Gizmodo',
            logo: './images/gizmodo.png',
            content: Render(data.gizmodo)
        },
        {
            name:'Android Authority',
            logo: './images/aa.png',
            content: Render(data.androidAuthority)
        }
    ]

    return(
        <div className="home-section">
            {sources.map(item=>{
                return(
                    <LazyLoad key={uniqid()} offset={200}>
                        <section className="news-source">
                            <h1 onClick={()=>openPage(item.logo,item.content)} className="source-name">{item.name}</h1>
                            <div className="news-list">
                                {item.content}
                            </div>
                        </section>
                    </LazyLoad>
                )
            })}
        </div>
    )
}