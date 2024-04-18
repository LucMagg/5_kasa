import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'

import './Header.scss'

export default function Header() {
    
    return <header>
        <Logo headerOrFooter={"header"}/>
        <h1>Kasa</h1>
        <nav>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to='/'>Accueil</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to='/about'>A Propos</NavLink></li>
            </ul>
        </nav>
    </header>
}