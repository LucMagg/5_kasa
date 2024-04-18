import { useRouteError, Link } from 'react-router-dom'

import './ErrorPage.scss'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (
        <main className='error'>
            <p className="error__status">{error.status}</p>
            <p className="error__message">{error.status === 404 ? 'Oups! La page que vous demandez n\'existe pas.' : error.statusText}</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </main>
    )
}