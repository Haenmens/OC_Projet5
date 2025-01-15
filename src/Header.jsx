import './style/header.scss'
import { NavLink } from 'react-router';
import Logo from "./assets/icones/logo.png"

function Header()
{
    return (
            <header className='flex f-row jc-sb'>
                <img src={Logo}/>
                <nav className='flex'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link actif" : "nav-link"}>Accueil</NavLink>
                    <NavLink to="/a_propos" className={({ isActive }) => isActive ? "nav-link actif" : "nav-link"}>A propos</NavLink>
                </nav>
            </header>
    );
}

export default Header