import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header-footer/Header.jsx";
import Footer from "../components/header-footer/Footer.jsx";

const About = () => {
    return (
        <div>

            {/*Page header*/}
            <div>
                <Header />
            </div>

            {/*About section*/}
            <div className="about-div">
                <h2 className="about-title">About Damiana</h2>
                <div>
                    <p className="about-text">
                        <strong className="about-name">Damiana Zammataro</strong> is a UK-based cosplayer and model, specializing in fantasy and character work.
                        Born and raised in Sicily, she now calls the northwest of England home. She's been a life-long lover of fantasy books
                        and movies, often using the influences from her favourite stories in her work. Damiana is also an avid lover of history,
                        which also finds its way into influencing some of her character creations.
                    </p>
                    <p className="about-text">
                        One of Damiana's greatest strengths is in character creation and storytelling, with many of the characters she's done
                        over the years being entirely original designs that she crafts intricate stories for. Damiana doesn't create a new character just to have
                        something to shoot, she's always thinking in terms of what story she can tell with each character she brings to life.
                        She's got a special talent for skillfully revealing these stories piece by piece over many months and even years. And with easy access 
                        to many of the UK's most impressive sights, it's that much easier for her to bring those stories to life.
                    </p>
                    <p className="about-text">
                        If you want a model with a diverse array of characters under her belt, a just as diverse wardrobe, and an unbelievable
                        ability to create new and intricate characters out of thin air, Damiana is the model you want. She's always looking to push
                        her boundaries and try the next new thing. Damiana has a drive to always create something even better than the last time, and 
                        an uncanny ability to constantly do so. If you want to work with Damiana, you can reach her  {' '}
                        <Link to="/contact"><strong className="about-to-contact">here</strong></Link>.
                    </p>
                </div>
            </div>

            {/*Page footer*/}
            <div className="pages-footer">
                <Footer />
            </div>
        </div>
    );
};

export default About;
