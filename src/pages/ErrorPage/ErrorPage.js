import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'


import './ErrorPage.scss'


export default function ErrorPage() {

    return (<Layout>
        <main className='error-main'>
            <h2 className='error-main__title'>Erreur</h2>
            <p className='error-main__status'>404</p>
            <div className='error-main__message'>
                <span className='error-main__message__block'>Oups! La page que </span>
                <span className='error-main__message__block'> vous demandez n'existe pas.</span>
            </div>
            <Link className='error-main__link' to='/'>Retourner sur la page d’accueil</Link>
        </main>

    </Layout>
    )
}