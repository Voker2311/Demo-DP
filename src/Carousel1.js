import React from 'react';
import "./Carousel.css";
import { Carousel } from "react-bootstrap";

function Carousel1() {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image"
                    src="https://www.fda.gov/files/covid_foodretail_bestpractices_header.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image"
                    src="https://www.redcross.org/content/dam/redcross/about-us/news/2020/coronavirussafetytw.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-image"
                    src="https://infographicnow.com/wp-content/uploads/2019/07/Statistics-infographic-This-workplace-safety-statistics-infographic-shows-the.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousel1;
