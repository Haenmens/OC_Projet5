import './style/a_propos.scss'
import ImgAPropos from './assets/images/a_propos.png'
import FlecheBas from './assets/icones/fleche_bas.png'
import { useState } from 'react';

function APropos()
{
    const [contenuActif, ActiverContenu] = useState([false, false, false, false]);

    const ouvrirContenu = (id) => {
        const NouveauContenu = [...contenuActif];
        NouveauContenu[id] = !NouveauContenu[id];
        ActiverContenu(NouveauContenu);
    };

    return (
        <main>
            <div className='image-main p-r'>
                <img src={ImgAPropos} className='w100' />
                <div className='calque p-a w100'></div>
            </div>
            <div className='contenu-apropos flex f-col g30 mgn-auto'>
                <div className='element-apropos'>
                    <div className='titre'>
                        Fiabilité
                        <img src={FlecheBas} onClick={() => ouvrirContenu(0)} className={contenuActif[0] ? "img-active" : ""}/>
                    </div>
                    <div className={contenuActif[0] ? "element-apropos-contenu actif" : "element-apropos-contenu"}>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées par nos équipes. 
                    </div>
                </div>
                <div className='element-apropos'>
                    <div className='titre'>
                      Respect
                      <img src={FlecheBas} onClick={() => ouvrirContenu(1)} className={contenuActif[1] ? "img-active" : ""}/>
                    </div>
                    <div className={contenuActif[1] ? "element-apropos-contenu actif" : "element-apropos-contenu"}>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme. 
                    </div>
                </div>
                <div className='element-apropos'>
                    <div className='titre'>
                        Service
                        <img src={FlecheBas} onClick={() => ouvrirContenu(2)} className={contenuActif[2] ? "img-active" : ""}/>
                    </div>
                    <div className={contenuActif[2] ? "element-apropos-contenu actif" : "element-apropos-contenu"}>
                        La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes
                         ou nos locataires, soit empreinte de respect et de bienveillance. 
                    </div>
                </div>
                <div className='element-apropos'>
                    <div className='titre'>
                        Sécurité
                        <img src={FlecheBas} onClick={() => ouvrirContenu(3)} className={contenuActif[3] ? "img-active" : ""}/>
                    </div>
                    <div className={contenuActif[3] ? "element-apropos-contenu actif" : "element-apropos-contenu"}>
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