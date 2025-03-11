import React from "react";
import "../styles/footer.css"
import landingPageData from "./landingPageData";



function Footer() {
    return ( 
        <footer>
             <img id="mobile-svg" src="./images/bg-pattern-footer-mobile.svg" alt="pattern-svg" />
               <img id="des-svg" src="./images/bg-pattern-footer-desktop.svg" alt="pattern-svg" />
            <div className="container-scocial-links">
             <img id="logo" src="./images/logo.svg" alt="logo" />

               <div className="socials">
               <a href="#"><img id="social-icon" src="./images/icon-facebook.svg" alt="icon-facebook" /></a>
               <a href="#"><img id="social-icon" src="./images/icon-pinterest.svg" alt="icon-insta" /> </a>
               <a href="#"><img id="social-icon" src="./images/icon-instagram.svg" alt="" /> </a>
               <a href="#"><img id="social-icon" src="./images/icon-twitter.svg" alt="" /></a>

               </div>
            </div>
<hr></hr>



        <div className="footer-info-list-container">
     
            <div className="ourCompany">
            <h3 id="footertitle">{landingPageData.company.title}</h3>
                <div className="lists">
                   {landingPageData.company.links.map(
                    (element)=>{return( <a href="#">{element} </a>) }
                   )}
                </div>
             </div>


             <div className="help ">
             <h3 id="footertitle">{landingPageData.help.title}</h3>
                <div className="lists">
            
                   {landingPageData.help.links.map(
                    (element)=>{return( <a href="#">{element} </a>) }
                   )}
                </div>
             </div>

             <div className="contact">
             <h3 id="footertitle">{landingPageData.contact.title}</h3>
                <div className="lists">
                   {landingPageData.contact.options.map(
                    (element)=>{return( <a href="#">{element} </a>) }
                   )}
                </div>
             </div>
        
             
             <div className="others">
         
      <h3 id="footertitle">{landingPageData.others.title}</h3>
                <div className="lists">
                   {landingPageData.others.links.map(
                    (element)=>{return( <a href="#">{element} </a>) }
                   )}
                </div>
             </div>
            </div>
        </footer>
     );
}

export default Footer;