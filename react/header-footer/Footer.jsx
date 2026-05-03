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
            <div>

            </div>
        </footer>
    );
};

export default Footer;