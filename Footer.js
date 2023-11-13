import { Outlet } from "react-router-dom";
import {FaLinkedin , FaFacebook , FaInstagram , FaTwitter , FaGithub } from "react-icons/fa"
import "./App.css";
import { NavLink } from "react-router-dom";


function Footer(){
    return(
        <>
            <footer className="footer-container">
                <div className="social-media-icons"> 
                    <a href="https://www.facebook.com/shaheen.hero.71?mibextid=ZbWKwL"> <FaFacebook className="facebook"/> </a>
                    <a href="https://www.instagram.com/hassan___here/"> <FaInstagram className="instagram"/> </a>
                    <a href="https://twitter.com/mhassan78611092?t=rIpTTJKr5ikxL4-pAJk9FA&s=08"> <FaTwitter className="twitter"/> </a>
                    <a href="https://www.linkedin.com/in/muhammad-hassan-a84a921b4"> <FaLinkedin className="linkedin"/> </a>
                    <a href="https://github.com/110hassan"> <FaGithub className="github"/> </a>
                </div>

                <div className="nav-items"> 
                   
                        <div> <NavLink to="/"> Home </NavLink> </div> 
                        <div> <NavLink to="/About"> About Me</NavLink> </div>
                        <div> <NavLink to="/Skills"> Skills & Qualification</NavLink> </div>
                        <div> <NavLink to="/Projects"> My Projects </NavLink> </div>
                        <div><NavLink to="/Contact"> Contact Me</NavLink> </div>
                
                </div>
                <div className="footer-end">
                    <p> Copyright &copy; 2023; Designed by <span>M.Hassan</span></p>
                </div>
                
            </footer>
            <Outlet/>
        </>
    );
}

export default Footer;