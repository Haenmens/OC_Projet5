import { useState } from "react";
import FlecheGauche from "../assets/icones/fleche_gauche.png"
import FlecheDroite from "../assets/icones/fleche_droite.png"
import "../style/Carrousel.scss"

function Carrousel({ images })
{
    const [indexActuel, setIndexActuel] = useState(0);
    
    //Gestion de l'index du carrousel
    const imagePrecedente = () => {
        setIndexActuel((ancienIndex) => ancienIndex === 0 ? images.length - 1 : ancienIndex - 1);
    };
    const imageSuivante = () => {
        setIndexActuel((ancienIndex) => ancienIndex === images.length - 1 ? 0 : ancienIndex + 1);
    };

    return (
        <section id='carrousel' className='p-r mgn-auto'>
            {
                images.map((photo, i) => (
                    <img src={photo} key={i} className={i === indexActuel ? "visible w100" : "cachee"}/>
                ))
            }
            <img src={FlecheGauche} id='fleche-gauche' className={images.length > 1 ? "p-a curs-p" : "cachee"} onClick={imagePrecedente}/>
            <img src={FlecheDroite} id='fleche-droite' className={images.length > 1 ? "p-a curs-p" : "cachee"} onClick={imageSuivante}/>
            <p id='compteur' className={images.length > 1 ? "p-a" : "cachee"}>{indexActuel + 1}/{images.length}</p>
        </section>
    );
}

export default Carrousel;