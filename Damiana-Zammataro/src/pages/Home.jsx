import React from "react";
import Header from "../components/header-footer/Header";
import Footer from "../components/header-footer/Footer";

const Home = () => {
    return (
        <div>
            {/*Page header*/}
            <div>
                <Header />
            </div>

            {/*Page body*/}
            <div className="homeBlock">
                <p className="homeText"><strong>Model</strong></p>
                <p className="homeText"><strong>-</strong></p>
                <p className="homeText"><strong>Storyteller</strong></p>
                <p className="homeText"><strong>-</strong></p>
                <p className="homeText"><strong>Cosplayer</strong></p>
            </div>

            <br />
            <br />

            <div className="carousel">
                <a className="carouselImage active"><img className="carouselImageIMG" src="" alt=""/></a>
                <a className="carouselImage"><img className="carouselImageIMG" src="" alt=""/></a>
                <a className="carouselImage"><img className="carouselImageIMG" src="" alt=""/></a>
                <a className="carouselImage"><img className="carouselImageIMG" src="" alt=""/></a>
                <a className="carouselImage"><img className="carouselImageIMG" src="" alt=""/></a>
                <a className="carouselImage"><img className="carouselImageIMG" src="" alt=""/></a>

                <br />

                <button id="prevBtn">&#10094;</button>
                <button id="nextBtn">&#10095;</button>
            </div>

            {/*Page footer*/}
            <div className="pages-footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
