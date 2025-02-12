import '../style/Logement.scss'
import { useParams, Navigate } from "react-router";
import { useEffect, useState } from 'react';
import Logements from '../assets/logements.json'
import FlecheGauche from "../assets/icones/fleche_gauche.png"
import FlecheDroite from "../assets/icones/fleche_droite.png"
import FlecheBas from "../assets/icones/fleche_bas.png"
import EtoileActive from "../assets/icones/etoile_active.png"
import EtoileInactive from "../assets/icones/etoile_inactive.png"

function Logement()
{
    const { id } = useParams();
    const logement = Logements.find((logement) => logement.id == id);
    const [hauteurMax, SetHauteurMax] = useState("auto");

    //Si aucun logement n'existe, renvoie vers la page d'erreur
    if (!logement)
    {
        return (<Navigate to="/404" />);
    }

    //Recalcul la hauteur maximale des collapses si la fenêtre change de taille
    window.addEventListener("resize", () => {
        calculerHauteurMax();
    });

    const [indexActuel, setIndexActuel] = useState(0);

    const [descriptionActive, setDescriptionActive] = useState(false);
    const [equipementsActif, setEquipementsActif] = useState(false);

    //Gestion de l'index du carrousel
    const imagePrecedente = () => {
        setIndexActuel((ancienIndex) => ancienIndex === 0 ? logement.pictures.length - 1 : ancienIndex - 1);
    };
    const imageSuivante = () => {
        setIndexActuel((ancienIndex) => ancienIndex === logement.pictures.length - 1 ? 0 : ancienIndex + 1);
    };

    //Gestion de l'affichage des collapses
    const activerDescription = () => {
        setDescriptionActive((description) => !description);
    }
    const activerEquipements = () => {
        setEquipementsActif((equipement) => !equipement);
    }
    //Gestion de la hauteur des collapses
    useEffect(() => {
        calculerHauteurMax();
    }, [descriptionActive, equipementsActif]);
    //Calcul de la hauteur maximale des collapses en prenant la hauteur la plus grande parmis les deux collapses ouverts -40px de padding
    const calculerHauteurMax = () => {
        if (equipementsActif != descriptionActive)
        {
            SetHauteurMax("auto");
        }
        else
        {
            setTimeout(() => {
                const equipements = document.querySelector("#contenu-eqp");
                const description = document.querySelector("#contenu-desc");

                const max = Math.max(equipements.clientHeight, description.clientHeight);
                SetHauteurMax(max - 40 + "px");
            }, 300);
        }
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
                                //Création d'un tableau de 5 cases vides pour boucler dedans avec map et gérer l'affichage de la notation
                                [...Array(5)].map((element, i) => (
                                    <img key={i} src={i < logement.rating ? EtoileActive : EtoileInactive} />
                                ))
                            }
                        </div>
                    </section>
                </div>                
                <section id='details' className='flex f-row jc-sb h100'>
                    <div id='description' className='h100'>
                        <div className='titre flex jc-sb algni-ctr'>
                            Description
                            <img src={FlecheBas} onClick={activerDescription} className={descriptionActive ? "img-active" : "img-inactive"}/>
                        </div>
                        <div id='contenu-desc' className={descriptionActive ? "contenu active" : "contenu"} style={{height: descriptionActive ? `${hauteurMax}` : "0px"}}>
                            {logement.description}
                        </div>
                    </div>
                    <div id='equipements' className='h100'>
                        <div className='titre flex jc-sb algni-ctr'>
                            Équipements
                            <img src={FlecheBas} onClick={activerEquipements} className={equipementsActif ? "img-active" : "img-inactive"}/>
                        </div>
                        <div id='contenu-eqp' className={equipementsActif ? "contenu active" : "contenu"} style={{height: equipementsActif ? `${hauteurMax}` : "0px"}}>
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