import './style/a_propos.scss'
import ImgAPropos from './assets/images/a_propos.png'
import FlecheBas from './assets/icones/fleche_bas.png'

function APropos()
{
    return (
        <main>
            <div className='image-main'>
                <img src={ImgAPropos} />
                <div className='calque'></div>
            </div>
            <div className='contenu-apropos'>
                <div className='element-apropos'>
                    <div className='titre'>
                        Fiabilité
                        <img src={FlecheBas}/>
                    </div>
                    <div className='element-apropos-contenu'>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées par nos équipes. 
                    </div>
                </div>
                <div className='element-apropos'>
                    <div className='titre'>
                      Respect
                      <img src={FlecheBas}/>
                    </div>
                    <div className='element-apropos-contenu'>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme. 
                    </div>
                </div>
                <div className='element-apropos'>
                    <div className='titre'>
                        Service
                        <img src={FlecheBas}/>
                    </div>
                    <div className='element-apropos-contenu'>
                        La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes
                         ou nos locataires, soit empreinte de respect et de bienveillance. 
                    </div>
                </div>
                <div className='element-apropos'>
                    <div className='titre'>
                        Sécurité
                        <img src={FlecheBas}/>
                    </div>
                    <div className='element-apropos-contenu'>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis 
                        par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. 
                    </div>
                </div>
            </div>
        </main>
    );
}

export default APropos