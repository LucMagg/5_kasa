import Logo from '../Logo/Logo'

import './Footer.scss'

export default function Footer (){
    return <footer className="footer">
        <div className="footer__logo">
            <Logo color="#FFFFFF" />
        </div>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
}