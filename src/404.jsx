import './style/404.scss'
import { Link } from 'react-router'

function Erreur()
{
    return (
            <main>
                <section id='erreur' className='flex f-col algni-ctr jc-ctr g50'>
                    <h1 className='mgn-0'>404</h1>
                    <p className='mgn-0'>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">Retournez sur la page d'accueil</Link>
                </section>
            </main>
    );
}

export default Erreur