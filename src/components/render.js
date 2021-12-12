import LazyLoad from 'react-lazyload'
import uniqid from 'uniqid'

export default function Render(data,page){

    function openArticle(url){
        window.open(url, '_self')
    }
    function handleImage(e){
        e.target.src = './images/placeholder.png'
    }

    const news = data.map(item=>{
        return(
            <LazyLoad key={uniqid()} offset={500}>
                <div className="news-card" onClick={()=>openArticle(item.link)}>
                    <img 
                        className="news-img" 
                        src={ item.img || './images/placeholder.png' } 
                        alt="news" 
                        onError={handleImage}/>
                    <p className="news-title">{item.title}</p>
                    {page && 
                        <a className="news-link" href={item.link}>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    }
                </div>
            </LazyLoad>
        )         
    })

    return news
}