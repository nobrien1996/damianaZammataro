import React from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

const Footer = () => {
    return (
        <footer>

            {/*Pages*/}
                <ul className="footerMenu">
                    <li className="footer-item"><Link className="footer-links footer-link" to="/">Home</Link></li>
                    <li className="footer-item"><Link className="footer-links footer-link" to="/about">About</Link></li>
                    <li className="footer-item"><Link className="footer-links footer-link" to="/portfolio">Portfolio</Link></li>
                    <li className="footer-item"><Link className="footer-links footer-link" to="/contact">Contact</Link></li>
                </ul>

            {/*Copyright*/}
            <div>
                <p>Copyright © 2026</p>
            </div>

            {/*Social medias*/}
            <div className="footerSocial">
                <a className="footer-social" href="https://www.instagram.com/the_ring_the_wand_the_throne/">
                    <img className="footer-social-img" src="images/social-media-icons/IG-logo-bw.webp" alt="Instagram logo"/>
                </a>
                <a className="footer-social" href="https://www.tiktok.com/@the_ringthewandthethrone?_r=1&_t=ZP-962dt9JmcRi">
                    <img className="footer-social-img" src="images/social-media-icons/tt-logo-bw.png" alt="TokTok logo"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;