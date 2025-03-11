import React from 'react';
import "../styles/NavigationStyle.css"
import { useRef } from 'react';





function Heading() {

    const NavRef = useRef();
    const handleclick = ()=>{
        NavRef.current.classList.toggle("responsiveNavBar");

        if ( NavRef.current.classList.contains("responsiveNavBar")) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "auto";
          }
    }

    return (
        
    <header>
        <div className='header-container'>
        <img id="headerlogo" src="./images/logo.svg" alt="logo" />
     <nav ref={NavRef}  >
          <a href='#'>HOW WE WORK</a>
          <a href='#'>BLOG</a>
         <a href='#'>ACCOUNT</a>
    
            <button id='plans'>VIEW PLANS</button>
      <img id='heading-mobile-svg' alt='svg-icon' src="./images/bg-pattern-mobile-nav.svg"></img>
            </nav>
        
           
            </div>
            <button  className='nav-btn ham-btn' onClick={handleclick} > <img alt='ham-icon' src="./images/icon-hamburger.svg"></img> </button>
    </header>

    
);
}

export default Heading ;