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
            <div>
                <Footer />
            </div>

        </div>
    );
};

export default Home;