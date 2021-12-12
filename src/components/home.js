import LazyLoad from 'react-lazyload'
import uniqid from 'uniqid'
import '../styles/home.css'
import Render from './render'

export default function Home({page, openPage, data}){

    const sourcesData = [
        {
            name:'Wired',
            logo: './images/wired.svg',
            content: Render(data.wired,page),
            array: 'wired'
        },
        {
            name:'TechCrunch',
            logo: './images/techcrunch.png',
            content: Render(data.techCrunch,page),
            array: 'techCrunch'
        },
        {
            name:'The Verge',
            logo: './images/verge.svg',
            content: Render(data.verge,page),
            array: 'verge'
        },
        {
            name:'VentureBeat',
            logo: './images/venturebeat.png',
            content: Render(data.ventureBeat,page),
            array: 'ventureBeat'
        },
        {
            name:'engadget',
            logo: './images/engadget.png',
            content: Render(data.engadget,page),
            array: 'engadget'
        },
        {
            name:'9To5Mac',
            logo: './images/9to5mac.png',
            content: Render(data.nineTo5Mac,page),
            array: 'nineTo5Mac'
        },
        {
            name:'Digital Trends',
            logo: './images/dt.png',
            content: Render(data.digitalTrends,page),
            array: 'digitalTrends'
        },
        {
            name:'Tech Radar',
            logo: './images/tr.png',
            content: Render(data.techRadar,page),
            array: 'techRadar'
        },
        {
            name:'GSMArena',
            logo: './images/gsmarena.png',
            content: Render(data.gsmArena,page),
            array: 'gsmArena'
        },
        {
            name:'Gizmodo',
            logo: './images/gizmodo.png',
            content: Render(data.gizmodo,page),
            array: 'gizmodo'
        },
        {
            name:'Android Authority',
            logo: './images/aa.png',
            content: Render(data.androidAuthority,page),
            array: 'androidAuthority'
        }
    ]

    return(
        <div className="home-section">
            {sourcesData.map(item=>{
                return(
                    <LazyLoad key={uniqid()} offset={200}>
                        <section className="news-source">
                            <h1 onClick={()=>openPage(item.logo,item.array)} className="source-name">{item.name}</h1>
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