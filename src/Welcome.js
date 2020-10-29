import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Widget from './Widget';
import "./Welcome.css";

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__screen">
                <h2>Welcome part</h2>
            </div>

            <div className="welcome__widget">
                <Widget />
            </div>

        </div>
    )
}

export default Welcome;
