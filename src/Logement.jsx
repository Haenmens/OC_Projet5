import './style/logement.scss'
import { useLocation } from "react-router";
import { useState } from 'react';
import FlecheGauche from "./assets/icones/fleche_gauche.png"
import FlecheDroite from "./assets/icones/fleche_droite.png"
import FlecheHaut from "./assets/icones/fleche_haut.png"
import FlecheBas from "./assets/icones/fleche_bas.png"


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
            <h2>{logement.title}</h2>
            <p className='localisation'>{logement.location}</p>
            <div className='tags'>
                {
                    logement.tags.map((tag) => (
                      <button className='tag' key={tag}>{tag}</button>
                    ))
                }
            </div>
            <div className='details'>
                <div className='description'>
                    <div className='titre'>
                        Description
                        <img src={descriptionActive ? FlecheHaut : FlecheBas} onClick={activerDescription}/>
                    </div>
                    <div className={descriptionActive ? "contenu-description" : "cachee"}>
                        {logement.description}
                    </div>
                </div>
                <div className='equipements'>
                    <div className='titre'>
                        Équipements
                        <img src={equipementsActif ? FlecheHaut : FlecheBas} onClick={activerEquipements}/>
                    </div>
                    <div className={equipementsActif ? "contenu-equipements" : "cachee"}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logement