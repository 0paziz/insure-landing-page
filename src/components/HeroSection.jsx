import React from 'react';
import "../styles/heroSection.css"
import landingPageData from './landingPageData';

function Hero_section() {
    return (
    <div className='hero-container'>
      {/* <img id='intro-right-mobile' src='./images/bg-pattern-intro-right-mobile.svg' alt='intro'></img>*/}
        <div className='content-container'>
        <img id='intro-right-des' src='./images/bg-pattern-intro-right-desktop.svg' alt='intro'></img>

            <div className='text-container'>
                <hr id='HorizentalHeroSection'></hr> 
            <h1 id='title'>{landingPageData.hero_section.title}</h1>
            <p id='description'>{landingPageData.hero_section.description}</p>
            <button id='hero-plans' >{landingPageData.hero_section.cta}</button>
            </div>
            <div className='intro-image' >
            <img id='intro-image' alt='family insures' src='./images/image-intro-desktop.jpg' ></img>
       
            </div>
          
            <img id='intro-left-des' src='./images/bg-pattern-intro-left-desktop.svg' alt='intro'></img>
        </div>
    
      {/*  <img id='intro-left-mobile' src='./images/bg-pattern-intro-left-mobile.svg' alt='intro'></img> */} 
    </div>  
    
);
}

export default Hero_section;