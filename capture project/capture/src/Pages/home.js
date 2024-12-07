import React from "react";
import hero from "../img/hero.jpg"
import w1 from "../img/wedding/ww.jpg"
import bb2 from "../img/special/bb2.jpg"
import tt1 from "../img/special/tt1.jpg"
import pp from "../img/photoshoot/pp.jpg"


function Home() {
    return (
        <>
            <img src={hero} style={{ width: "100%", height: "38rem", objectFit: "cover", objectPosition: "top" }} alt="Sorry" />
            <div className="d-flex justify-content-center bg-dark">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{maxWidth:"60rem"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={w1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={bb2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={tt1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={pp} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        </>
    )
}

export default Home;