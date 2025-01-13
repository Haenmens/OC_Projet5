import "./style/footer.scss"
import LogoBlanc from './assets/icones/logo_blanc.png'

function Footer()
{
    return (
            <footer>
                <img src={LogoBlanc} />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
    );
}

export default Footer