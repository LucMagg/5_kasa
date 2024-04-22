import { useRouteError, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


import './ErrorPage.scss'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (<>
        <Header />
        <main className='error-main'>
            <p className='error-main__status'>404</p>
            <div className='error-main__message'>
                <span className='error-main__message__block'>Oups! La page que </span>
                <span className='error-main__message__block'> vous demandez n'existe pas.</span>
            </div>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </main>
        <Footer />
    </>)
}