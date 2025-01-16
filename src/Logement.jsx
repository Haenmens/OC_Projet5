import './style/logement.scss'
import { useParams, Navigate } from "react-router";
import { useState } from 'react';
import Logements from './assets/logements.json'
import FlecheGauche from "./assets/icones/fleche_gauche.png"
import FlecheDroite from "./assets/icones/fleche_droite.png"
import FlecheBas from "./assets/icones/fleche_bas.png"
import EtoileActive from "./assets/icones/etoile_active.png"
import EtoileInactive from "./assets/icones/etoile_inactive.png"
import Erreur from './404';

function Logement()
{
    const { id } = useParams();
    const logement = Logements.find((logement) => logement.id == id);

    if (!logement)
    {
        return (<Navigate to="/404" />);
    }

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
                <section id='carrousel' className='p-r mgn-auto'>
                    {
                        logement.pictures.map((photo, i) => (
                            <img src={photo} key={i} className={i === indexActuel ? "visible w100" : "cachee"}/>
                        ))
                    }
                    <img src={FlecheGauche} id='fleche-gauche' className={logement.pictures.length > 1 ? "p-a curs-p" : "cachee"} onClick={imagePrecedente}/>
                    <img src={FlecheDroite} id='fleche-droite' className={logement.pictures.length > 1 ? "p-a curs-p" : "cachee"} onClick={imageSuivante}/>
                    <p id='compteur' className={logement.pictures.length > 1 ? "p-a" : "cachee"}>{indexActuel + 1}/{logement.pictures.length}</p>
                </section>
                <div id='infos' className='flex f-row jc-sb'>
                    <section id='logement-header-1' className='flex f-col'>
                        <div id='logement-titre'>
                            <h2>{logement.title}</h2>
                            <p id='localisation'>{logement.location}</p>
                        </div>
                        <div className='flex f-row f-wrap g15'>
                            {
                                logement.tags.map((tag) => (
                                <button className='tag' key={tag}>{tag}</button>
                                ))
                            }
                        </div>
                    </section>
                    <section id='logement-header-2' className='flex f-col algni-fe jc-sb g10'>
                        <div id='hote' className='flex f-row algni-ctr g10'>
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture}/>
                        </div>
                        <div id='note' className='flex f-row'>
                            {
                                [...Array(5)].map((Element, i) => (
                                    <img key={i} src={i < logement.rating ? EtoileActive : EtoileInactive} />
                                ))
                            }
                        </div>
                    </section>
                </div>                
                <section id='details' className='flex f-row jc-sb'>
                    <div id='description'>
                        <div className='titre flex jc-sb algni-ctr'>
                            Description
                            <img src={FlecheBas} onClick={activerDescription} className={descriptionActive ? "img-active" : "img-inactive"}/>
                        </div>
                        <div className={descriptionActive ? "contenu active" : "contenu"}>
                            {logement.description}
                        </div>
                    </div>
                    <div id='equipements'>
                        <div className='titre flex jc-sb algni-ctr'>
                            Équipements
                            <img src={FlecheBas} onClick={activerEquipements} className={equipementsActif ? "img-active" : "img-inactive"}/>
                        </div>
                        <div className={equipementsActif ? "contenu active" : "contenu"}>
                            <ul id='liste-equipements' className='flex f-col pdn-0 mgn-0 g5'>
                                {
                                    logement.equipments.map((equipement) => (
                                        <li key={equipement}>{equipement}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Logement