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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>

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