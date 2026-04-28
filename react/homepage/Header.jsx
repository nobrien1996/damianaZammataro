import React from "react";
import "./css/style.css";

const Header = () => {
    return (
        <header>
            <h1>Damiana Zammataro</h1>
            <nav class="navbar">
                <a href="#" class="nav-name">Damiana Zammataro</a>
                {/*Nav Menu*/}
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item" id="nav-item"><a class="nav-links" id="nav-links" href="#">Home</a></li>
                    <li class="nav-item" id="nav-item"><a class="nav-links" id="nav-links" href="#">About</a></li>
                    <li class="nav-item" id="nav-item"><a class="nav-links" id="nav-links" href="#">Portfolio</a></li>
                    <li class="nav-item" id="nav-item"><a class="nav-links" id="nav-links" href="#">Contact</a></li>
                </ul>
                {/*Hamburger Icon Trigger*/}
                <div class="hamburger" id="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header