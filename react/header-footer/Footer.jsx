import React from "react";
import Home from "../Home.jsx";
import About from "../side-pages/About.jsx";
import Portfolio from "../side-pages/Portfolio.jsx";
import Contact from "../side-pages/Contact.jsx";
import "../../css/style.css";

const Footer = () => {
    return (
        <footer>

            {/*Pages*/}
                <ul className="footerMenu">
                    <li className="footer-item"><Link className="footer-links footer-link" to="/" onClick={}>Home</Link></li>
                    <li className="footer-item"><Link className="footer-links footer-link" to="/about" onClick={}>About</Link></li>
                    <li className="footer-item"><Link className="footer-links footer-link" to="/portfolio" onClick={}>Portfolio</Link></li>
                    <li className="footer-item"><Link className="footer-links footer-link" to="/contact" onClick={}>Contact</Link></li>
                </ul>

            {/*Copyright*/}
            <div>
                <p>Copyright © 2026</p>
            </div>

            {/*Social medias*/}
            <div>

            </div>
        </footer>
    );
};

export default Footer;