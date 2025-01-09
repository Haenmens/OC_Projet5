import { Routes, Route } from 'react-router'
import Accueil from './Accueil.jsx'
import APropos from './A_Propos.jsx';
import Logement from './Logement.jsx';

function Router()
{
    return (
        <Routes>
            <Route path='/' element={<Accueil />}/>
            <Route path='/a_propos' element={<APropos />}/>
            <Route path='/logement' element={<Logement />}/>
        </Routes>
    );
}

export default Router