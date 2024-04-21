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
            <p className="error-main__status">{error.status}</p>
            <p className="error-main__message">{error.status === 404 ? 'Oups! La page que vous demandez n\'existe pas.' : error.statusText}</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </main>
        <Footer />
    </>)
}