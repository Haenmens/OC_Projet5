import '../style/APropos.scss'
import ImgAPropos from '../assets/images/a_propos.png'
import Banderole from '../Composants/Banderole';
import MenuDeroulant from '../Composants/MenuDeroulant';

function APropos()
{
    return (
        <main>
            <Banderole image={ImgAPropos} texte={""} />
            <section className='contenu-apropos flex f-col g30 mgn-auto'>
                <article>
                    < MenuDeroulant titre={"Fiabilité"} contenu={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}/>
                </article>
                <article>
                    < MenuDeroulant titre={"Respect"} contenu={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme.</p>}/>
                </article>
                <article>
                    < MenuDeroulant titre={"Service"} contenu={<p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes
                         ou nos locataires, soit empreinte de respect et de bienveillance.</p>}/>
                </article>
                <article>
                    < MenuDeroulant titre={"Sécurité"} contenu={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis 
                        par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}/>
                </article>
            </section>
        </main>
    );
}

export default APropos