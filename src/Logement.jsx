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
            <div className="logement">
                <div className='carrousel'>
                {
                        logement.pictures.map((photo, i) => (
                            <img src={photo} key={i} className={i === indexActuel ? "visible" : "cachee"}/>
                        ))
                    }
                    <img src={FlecheGauche} className={logement.pictures.length > 1 ? "fleche-gauche" : "cachee"} onClick={imagePrecedente}/>
                    <img src={FlecheDroite} className={logement.pictures.length > 1 ? "fleche-droite" : "cachee"} onClick={imageSuivante}/>
                    <p className={logement.pictures.length > 1 ? "compteur" : "cachee"}>{indexActuel + 1}/{logement.pictures.length}</p>
                </div>
                <div className='logement-header-1'>
                    <div className='logement-titre'>
                        <h2>{logement.title}</h2>
                        <p className='localisation'>{logement.location}</p>
                    </div>
                    <div className='hote'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture}/>
                    </div>
                </div>
                <div className='logement-header-2'>
                    <div className='tags'>
                        {
                            logement.tags.map((tag) => (
                            <button className='tag' key={tag}>{tag}</button>
                            ))
                        }
                    </div>
                    <div className='note'>
                        {
                            [...Array(5)].map((Element, i) => (
                                <img key={i} src={i < logement.rating ? EtoileActive : EtoileInactive} />
                            ))
                        }
                    </div>
                </div>
                <div className='details'>
                    <div className='description'>
                        <div className='titre'>
                            Description
                            <img src={FlecheBas} onClick={activerDescription} className={descriptionActive ? "img-active" : "img-inactive"}/>
                        </div>
                        <div className={descriptionActive ? "contenu-description active" : "contenu-description"}>
                            {logement.description}
                        </div>
                    </div>
                    <div className='equipements'>
                        <div className='titre'>
                            Équipements
                            <img src={FlecheBas} onClick={activerEquipements} className={equipementsActif ? "img-active" : "img-inactive"}/>
                        </div>
                        <div className={equipementsActif ? "contenu-equipements active" : "contenu-equipements"}>
                            <ul className='liste-equipements'>
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