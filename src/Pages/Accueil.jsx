import '../style/Accueil.scss'
import Logements from '../assets/logements.json'
import ImgAccueil from '../assets/images/accueil.png'
import FicheLogement from '../Composants/FicheLogement';
import Banderole from '../Composants/Banderole';

function Accueil()
{
    return (
        <main>
            <Banderole image={ImgAccueil} texte={"Chez vous, partout et ailleurs"}/>
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