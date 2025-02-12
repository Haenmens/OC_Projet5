import { Routes, Route } from 'react-router'
import Accueil from '../Pages/Accueil.jsx'
import APropos from '../Pages/APropos.jsx';
import Logement from '../Pages/Logement.jsx';
import Erreur from '../Pages/404.jsx';

function Router()
{
    return (
        <Routes>
            <Route path='/' element={<Accueil />}/>
            <Route path='/a_propos' element={<APropos />}/>
            <Route path='/logement/:id' element={<Logement />}/>
            <Route path='/*' element={<Erreur />}/>
        </Routes>
    );
}

export default Router