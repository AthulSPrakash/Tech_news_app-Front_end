import '../styles/page.css'

export default function IndvPage({logo,data}){

    return(
        <div className="page">
            <img src={logo} className='logo' alt='logo'/>
            <div className='indv-page'>
                {data}
            </div>
        </div>
    )
}