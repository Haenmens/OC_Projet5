import '../style/FicheLogement.scss'
import { NavLink } from 'react-router';

function FicheLogement({ logement })
{
    return (
        <NavLink to={`/logement/${logement.id}`} className="fiche-logement flex jc-fs algni-fe">
            <img className='vignette-logement' src={logement.pictures[0]}/>
            <span className='calque-vignette'></span>
            <p>{ logement.title }</p>
        </NavLink>
    );
}

export default FicheLogement