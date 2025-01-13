import './style/accueil.scss'
import Logements from './assets/logements.json'
import ImgAccueil from './assets/images/accueil.png'
import FicheLogement from './FicheLogement';

function Accueil()
{
    return (
            <main>
                <div className='image-main'>
                    <img src={ImgAccueil} />
                    <div className='calque'><p>Chez vous, partout et ailleurs</p></div>
                </div>
                <div className='galerie'>
                    { 
                        Logements.map((logement) => (
                            <FicheLogement key={logement.id} logement={logement}/>
                        ))
                    }
                </div>
            </main>
    );
}

export default Accueil