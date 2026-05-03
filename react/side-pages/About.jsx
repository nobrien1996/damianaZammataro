import React from "react";
import Header from "../header-footer/Header.jsx";
import "../../css/style.css";

const About = () => {
    return (
        <body>

            {/*Page header*/}
            <div>
                <Header />
            </div>

            {/*About section*/}
            <div>
                <h2>About Damiana</h2>
                <div>
                    <p>
                        <strong>Damiana Zammataro</strong> is a UK-based cosplayer and model, specializing in fantasy and character work. 
                        Born and raised in Sicily, she now calls the northwest of England home. She's been a life-long lover of fantasy books 
                        and movies, often using the influences from her favourite stories in her work. Damiana is also an avid lover of history, 
                        which also finds its way into influencing some of her character creations.
                    </p>
                    <p>
                        One of Damiana's greatest strengths is in character creation and storytelling, with many of the characters she's done 
                        over the years being entirely original designs that she crafts intricate stories for. She's got a special talent for 
                        skillfully revealing these stories piece by piece over many months and even years. 
                    </p>
                    <p>
                        If you want a model with a diverse array of characters under her belt, a just as diverse wardrobe, and an unbelievable 
                        ability to create new and intricate characters out of thin air, Damiana is the model you want.
                    </p>
                </div>
            </div>
        </body>

    )
}