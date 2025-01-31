import './style/fiche_logement.scss'
import { NavLink } from 'react-router';

function FicheLogement({ logement })
{
    return (
        <NavLink to={`/logement/${logement.id}`} className="fiche-logement flex jc-fs algni-fe">
            <p>{ logement.title }</p>
        </NavLink>
    );
}

export default FicheLogement