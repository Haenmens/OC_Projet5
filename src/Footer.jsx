import "./style/footer.scss"
import LogoBlanc from './assets/icones/logo_blanc.png'

function Footer()
{
    return (
        <div>
            <footer>
                <img src={LogoBlanc} />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
}

export default Footer