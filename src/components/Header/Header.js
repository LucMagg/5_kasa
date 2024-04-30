import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'

import './Header.scss'

export default function Header() {
    
    return <header className='header'>
        <div className='header__logo'>
            <Logo color="#FF6060" />
            <h1 className='header__title'>Kasa</h1>
        </div>
        <nav>
            <ul className='header__link-list'>
                <li className='header__link-list__link'>
                    <NavLink className={`header__link-list__link__to ${({isActive}) => isActive ? 'active' : ''}`} to='/index'>Accueil</NavLink>
                </li>
                <li className='header__link-list__link'>
                    <NavLink className={`header__link-list__link__to ${({isActive}) => isActive ? 'active' : ''}`} to='/about'>A Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}