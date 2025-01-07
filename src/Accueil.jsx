import './style/accueil.scss'
import Logo from "./assets/icones/logo.png"
import ImgAccueil from './assets/images/accueil.png'

function Accueil()
{
    return (
        <div>
            <header>
                <img src={Logo}/>
                <nav>
                    <a>Accueil</a>
                    <a>A propos</a>
                </nav>
            </header>
            <main>
                <div className='image-main'>
                    <img src={ImgAccueil} />
                    <div className='calque'><p>Chez vous, partout et ailleurs</p></div>
                </div>
                <div className='galerie'>
                    TEST
                </div>
            </main>
        </div>
    );
}

export default Accueil