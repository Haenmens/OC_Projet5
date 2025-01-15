import './style/logement.scss'
import { useLocation } from "react-router";
import { useState } from 'react';
import FlecheGauche from "./assets/icones/fleche_gauche.png"
import FlecheDroite from "./assets/icones/fleche_droite.png"
import FlecheBas from "./assets/icones/fleche_bas.png"
import EtoileActive from "./assets/icones/etoile_active.png"
import EtoileInactive from "./assets/icones/etoile_inactive.png"

function Logement()
{
    const location = useLocation();
    const logement = location.state;

    const [indexActuel, setIndexActuel] = useState(0);

    const [descriptionActive, setDescriptionActive] = useState(false);
    const [equipementsActif, setEquipementsActif] = useState(false);

    const imagePrecedente = () => {
        setIndexActuel((ancienIndex) => ancienIndex === 0 ? logement.pictures.length - 1 : ancienIndex - 1);
    };
    const imageSuivante = () => {
        setIndexActuel((ancienIndex) => ancienIndex === logement.pictures.length - 1 ? 0 : ancienIndex + 1);
    };

    const activerDescription = () => {
        setDescriptionActive((description) => !description);
    }
    const activerEquipements = () => {
        setEquipementsActif((equipement) => ! equipement);
    }

    return (
        <main>
            <div id="logement" className='p-r'>
                <div id='carrousel' className='p-r mgn-auto'>
                {
                        logement.pictures.map((photo, i) => (
                            <img src={photo} key={i} className={i === indexActuel ? "visible w100" : "cachee"}/>
                        ))
                    }
                    <img src={FlecheGauche} id='fleche-gauche' className={logement.pictures.length > 1 ? "p-a curs-p" : "cachee"} onClick={imagePrecedente}/>
                    <img src={FlecheDroite} id='fleche-droite' className={logement.pictures.length > 1 ? "p-a curs-p" : "cachee"} onClick={imageSuivante}/>
                    <p id='compteur' className={logement.pictures.length > 1 ? "p-a" : "cachee"}>{indexActuel + 1}/{logement.pictures.length}</p>
                </div>
                <div id='logement-header-1' className='flex f-row algni-ctr jc-sb'>
                    <div id='logement-titre'>
                        <h2>{logement.title}</h2>
                        <p id='localisation'>{logement.location}</p>
                    </div>
                    <div id='hote' className='flex f-row algni-ctr g10'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture}/>
                    </div>
                </div>
                <div id='logement-header-2' className='flex f-row jc-sb algni-ctr'>
                    <div className='flex f-row g15'>
                        {
                            logement.tags.map((tag) => (
                            <button className='tag' key={tag}>{tag}</button>
                            ))
                        }
                    </div>
                    <div id='note' className='flex f-row'>
                        {
                            [...Array(5)].map((Element, i) => (
                                <img key={i} src={i < logement.rating ? EtoileActive : EtoileInactive} />
                            ))
                        }
                    </div>
                </div>
                <div id='details' className='flex f-row jc-sb'>
                    <div id='description'>
                        <div className='titre flex jc-sb algni-ctr'>
                            Description
                            <img src={FlecheBas} onClick={activerDescription} className={descriptionActive ? "img-active" : "img-inactive"}/>
                        </div>
                        <div id='contenu-description' className={descriptionActive ? "active" : ""}>
                            {logement.description}
                        </div>
                    </div>
                    <div id='equipements'>
                        <div className='titre flex jc-sb algni-ctr'>
                            Équipements
                            <img src={FlecheBas} onClick={activerEquipements} className={equipementsActif ? "img-active" : "img-inactive"}/>
                        </div>
                        <div id='contenu-equipements' className={equipementsActif ? "active" : ""}>
                            <ul id='liste-equipements' className='flex f-col pdn-0 mgn-0 g5'>
                                {
                                    logement.equipments.map((equipement) => (
                                        <li key={equipement}>{equipement}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Logement