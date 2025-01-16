import './style/accueil.scss'
import Logements from './assets/logements.json'
import ImgAccueil from './assets/images/accueil.png'
import FicheLogement from './FicheLogement';

function Accueil()
{
    return (
            <main>
                <section className='image-main p-r'>
                    <img src={ImgAccueil} className='w100'/>
                    <div className='calque w100 flex algni-ctr jc-ctr p-a'><p>Chez vous, partout et ailleurs</p></div>
                </section>
                <section id='galerie' className='flex f-row jc-fs g50 f-wrap'>
                    { 
                        Logements.map((logement) => (
                            <FicheLogement key={logement.id} logement={logement}/>
                        ))
                    }
                </section>
            </main>
    );
}

export default Accueil