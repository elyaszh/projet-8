import Logo from '../../assets/Logo-footer.svg'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            <img src={Logo} alt="" />
            <h3 className="footer-h3">2020 Kasa. All rights reserved</h3>
        </footer>
    )
}

export default Footer