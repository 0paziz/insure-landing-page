import React from "react";

import "../styles/features.css"
function Features() {
    return ( 
        <section id="feutures">

    <hr id="horizental"></hr>
<h1 id="main-title">We’re different</h1>

        <div className="features-container">
    
            <div className="f1">
        <img id="icons" alt="snapy-process" src="./images/icon-snappy-process.svg"></img>
        <h2 id="feature-title">Snappy Process</h2>
        <p id="feature-description">Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms</p>
            </div>

            <div className="f1">
        <img id="icons" alt="Affordable Prices" src="./images/icon-affordable-prices.svg"></img>
        <h2 id="feature-title">Affordable Prices</h2>
        <p id="feature-description">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible</p>
            </div>

            <div className="f1">
        <img id="icons" alt="People First" src="./images/icon-people-first.svg"></img>
        <h2 id="feature-title">People First</h2>
        <p id="feature-description">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
            </div>

        </div>

      
        </section>
     );
}

export default Features;