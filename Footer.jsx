import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"

function Footer(){
    return <>

        <footer>
        <div className="container-bottom">

        
         <div className="social-icon">
         
         
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
            <br />
            <p>Copyright@2022</p>
            </div>
       </div>
        </footer>
    </>   
}

export default Footer;