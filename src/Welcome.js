import React from "react";
import "./Welcome.css";
import Carousel from "./Carousel1";
import Widget from "./Widget";

function Welcome() {
  return (
    <div className="welcome">
        <div className="welcome__part">
            <Carousel />
            <div>
                <h2>Welcome to Doctor-Patient Portal</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam accusamus. Repellat exercitationem suscipit error, perferendis ducimus debitis nam sit quis hic officiis illo veniam, asperiores earum, nisi molestias adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam accusamus. Repellat exercitationem suscipit error, perferendis ducimus debitis nam sit quis hic officiis illo veniam, asperiores earum, nisi molestias adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam accusamus. Repellat exercitationem suscipit error, perferendis ducimus debitis nam sit quis hic officiis illo veniam, asperiores earum, nisi molestias adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam accusamus. Repellat exercitationem suscipit error, perferendis ducimus debitis nam sit quis hic officiis illo veniam, asperiores earum, nisi molestias adipisci.</p>
            </div>
        </div>

        <div className="welcome__widget">
            <Widget width="380" />
        </div>

    </div>
  );
}

export default Welcome;
