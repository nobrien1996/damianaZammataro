import React from "react";
import Header from "./header-footer/Header";

const Home = () => {
    return (
        <div>
            {/*Page header*/}
            <div>
                <Header />
            </div>

            {/*Page body*/}
            <div className="homeBlock">
                <p className="homeText">Model</p>
                <p className="homeText">-</p>
                <p className="homeText">Storyteller</p>
                <p className="homeText">-</p>
                <p className="homeText">Cosplayer</p>
            </div>

            {/*Page footer*/}
            <div>
                <Footer />
            </div>

        </div>
    );
};

export default Home;