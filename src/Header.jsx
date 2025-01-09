import './style/header.scss'
import { NavLink } from 'react-router';
import Logo from "./assets/icones/logo.png"

function Header()
{
    return (
        <div>
            <header>
                <img src={Logo}/>
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link actif" : "nav-link"}>Accueil</NavLink>
                    <NavLink to="/a_propos" className={({ isActive }) => isActive ? "nav-link actif" : "nav-link"}>A propos</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header