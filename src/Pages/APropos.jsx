import '../style/APropos.scss'
import ImgAPropos from '../assets/images/a_propos.png'
import FlecheBas from '../assets/icones/fleche_bas.png'
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
            <section className='image-main p-r'>
                <img src={ImgAPropos} className='w100' />
                <div className='calque p-a w100'></div>
            </section>
            <section className='contenu-apropos flex f-col g30 mgn-auto'>
                <article className='element-apropos'>
                    <header className='flex jc-sb algni-ctr'>
                        <h2 className='mgn-0'>Fiabilité</h2>
                        <button onClick={() => ouvrirContenu(0)}><img src={FlecheBas}className={contenuActif[0] ? "img-active" : ""}/></button>
                    </header>
                    <p className={contenuActif[0] ? "element-apropos-contenu actif mgn-0" : "element-apropos-contenu mgn-0"}>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées par nos équipes. 
                    </p>
                </article>
                <article className='element-apropos'>
                    <header className='flex jc-sb algni-ctr'>
                        <h2 className='mgn-0'>Respect</h2>
                        <button onClick={() => ouvrirContenu(1)}><img src={FlecheBas}className={contenuActif[1] ? "img-active" : ""}/></button>
                    </header>
                    <p className={contenuActif[1] ? "element-apropos-contenu actif mgn-0" : "element-apropos-contenu mgn-0"}>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage 
                        entraînera une exclusion de notre plateforme. 
                    </p>
                </article>
                <article className='element-apropos'>
                    <header className='flex jc-sb algni-ctr'>
                        <h2 className='mgn-0'>Service</h2>
                        <button onClick={() => ouvrirContenu(2)}><img src={FlecheBas}className={contenuActif[2] ? "img-active" : ""}/></button>
                    </header>
                    <p className={contenuActif[2] ? "element-apropos-contenu actif mgn-0" : "element-apropos-contenu mgn-0"}>
                        La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes
                         ou nos locataires, soit empreinte de respect et de bienveillance. 
                    </p>
                </article>
                <article className='element-apropos'>
                    <header className='flex jc-sb algni-ctr'>
                        <h2 className='mgn-0'>Sécurité</h2>
                        <button onClick={() => ouvrirContenu(3)}><img src={FlecheBas}className={contenuActif[3] ? "img-active" : ""}/></button>
                    </header>
                    <p className={contenuActif[3] ? "element-apropos-contenu actif mgn-0" : "element-apropos-contenu mgn-0"}>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis 
                        par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. 
                    </p>
                </article>
            </section>
        </main>
    );
}

export default APropos