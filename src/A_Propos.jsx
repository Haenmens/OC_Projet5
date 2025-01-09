import './style/accueil.scss'
import ImgAPropos from './assets/images/a_propos.png'

function APropos()
{
    return (
        <div>
            <main>
                <div className='image-main'>
                    <img src={ImgAPropos} />
                    <div className='calque'></div>
                </div>
                <div className='galerie'>
                    TEST
                </div>
            </main>
        </div>
    );
}

export default APropos