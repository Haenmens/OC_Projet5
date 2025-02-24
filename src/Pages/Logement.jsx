import '../style/Logement.scss'
import { useParams, Navigate } from "react-router";
import Logements from '../assets/logements.json'
import EtoileActive from "../assets/icones/etoile_active.png"
import EtoileInactive from "../assets/icones/etoile_inactive.png"
import MenuDeroulant from '../Composants/MenuDeroulant';
import Carrousel from '../Composants/Carrousel';

function Logement()
{
    const { id } = useParams();
    const logement = Logements.find((logement) => logement.id == id);

    //Si aucun logement n'existe, renvoie vers la page d'erreur
    if (!logement)
    {
        return (<Navigate to="/404" />);
    }

    return (
        <main>
            <div id="logement" className='p-r'>
                < Carrousel images={ logement.pictures } />
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
                <section id='details' className='flex f-row jc-sb g30'>
                    < MenuDeroulant titre={"Description"} contenu={ <p>{logement.description}</p>} />
                    < MenuDeroulant titre={"Équipements"} contenu={ <ul id='liste-equipements' className='flex f-col pdn-0 mgn-0 g5'>
                                                                        {
                                                                            logement.equipments.map((equipement) => (
                                                                                <li key={equipement}>{equipement}</li>
                                                                            ))
                                                                        }
                                                                    </ul> } />
                </section>
            </div>
        </main>
    );
}

export default Logement