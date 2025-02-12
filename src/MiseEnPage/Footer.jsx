import "../style/Footer.scss"
import LogoBlanc from '../assets/icones/logo_blanc.png'

function Footer()
{
    return (
            <footer className="flex f-col algni-ctr jc-ctr">
                <img src={LogoBlanc} />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
    );
}

export default Footer