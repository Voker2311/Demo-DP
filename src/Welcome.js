import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import "./Welcome.css";
function Welcome() {
  return (
    <div className="container">
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>CRYP70N1C</h3>
              <p>Hello!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>CRYP70N1C</h3>
              <p>Hello!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>CRYP70N1C</h3>
              <p>Hello!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Welcome;
