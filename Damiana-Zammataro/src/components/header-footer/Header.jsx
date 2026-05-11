import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => setIsActive(prev => !prev);
    const closeMenu = () => setIsActive(false);

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="nav-name" onClick={closeMenu}>Damiana Zammataro</Link>

                <ul className={`nav-menu${isActive ? " active" : ""}`}>
                    <li className="nav-item"><Link className="nav-links nav-link" to="/" onClick={closeMenu}>Home</Link></li>
                    <li className="nav-item"><Link className="nav-links nav-link" to="/about" onClick={closeMenu}>About</Link></li>
                    <li className="nav-item"><Link className="nav-links nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                    <li className="nav-item"><Link className="nav-links nav-link" to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>

                <div className={`hamburger${isActive ? " active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
