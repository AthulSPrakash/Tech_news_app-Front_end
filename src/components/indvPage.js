import '../styles/page.css'
import Render from './render'

export default function IndvPage({page, logo, data, array}){
    const list = Render(data[array],page)
    return(
        <div className="page">
            <img src={logo} className='logo' alt='logo'/>
            <div className='indv-page'>
                {list}
            </div>
        </div>
    )
}