import { useState } from "react";
import FlecheBas from "../assets/icones/fleche_bas.png"
import "../style/MenuDeroulant.scss"

function MenuDeroulant({ titre, contenu })
{
    const [actif, SetActif] = useState(false);

    const clicFleche = () => {
        SetActif(!actif);
    }

    return (
        <div className="menu-deroulant">
            <header className='flex jc-sb algni-ctr'>
                <h2 className='mgn-0'>{titre}</h2>
                <button onClick={ () => clicFleche() }><img src={ FlecheBas } className={ actif ? "img-active" : ""}/></button>
            </header>
            <div className={ actif ? "menu-deroulant-contenu actif mgn-0" : "menu-deroulant-contenu mgn-0" }>
                { contenu }
            </div>
        </div>
    );
}

export default MenuDeroulant;