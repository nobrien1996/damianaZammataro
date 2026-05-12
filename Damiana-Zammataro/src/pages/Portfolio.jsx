import React from "react";
import Header from "../components/header-footer/Header.jsx";
import InstagramFeed from "../components/APIs/IG-api.jsx";
import TikTokProfile from "../components/APIs/TT-api.jsx";
import Footer from "../components/header-footer/Footer.jsx";

const Portfolio = () => {
    return (
        <div>

            {/*Page header*/}
            <div>
                <Header />
            </div>

            {/*IG & TT APIs*/}
            <div className="socials-apis">
                <div className="ig-api">
                    <InstagramFeed />
                </div>

                <div className="tt-api">
                    <TikTokProfile />
                </div>
            </div>

            {/*Page content*/}
            <div>

            </div>

            {/*Page footer*/}
            <div className="pages-footer">
                <Footer />
            </div>
        </div>
    );
};

export default Portfolio;
