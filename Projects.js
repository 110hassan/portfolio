import "./App.css";
import { CgWebsite } from "react-icons/cg";
import {FcWorkflow} from "react-icons/fc";
import {MdMobileFriendly} from "react-icons/md";



function Project(){
    return(
        <>
           
            <section id="Projects">
                <h1>My Projects.</h1>
                <p>These are some projects which I have created in the field of software development to enhance my experience and knowledge.</p>
                <div className="container">
                    <div>
                        <CgWebsite id="front"/>
                        <h2> Web Development</h2>
                        <h4>(Frontend)</h4>
                        <h6>Shopster (E-commerce Website)</h6>
                        <p>Got the opportunity to work with my expert partners in building this dynamic project. This project is based on core concepts of HTML,CSS & JAVASCRIPT resulting in a user-friendly design and interactive user experience</p>
                    </div>
                    <div>
                        <FcWorkflow id="back"/>
                        <h2>Web Development</h2>
                        <h4>(Backend)</h4>
                        <h6>Hólá Cãfê (Web Application)</h6>
                        <p>This is a group project where I was the group leader and developed a online food/snack delivery web application in PHP and MySQL for the Database Management. This application enables user a friendly UI and dynamic experience.</p>
                    </div>
                    <div>
                        <MdMobileFriendly id="mobile"/>
                        <h2>Mobile Application Development</h2>
                        <h4>(Frontend)</h4>
                        <h6>Gò Dôçtór (Mobile Application)</h6>
                        <p>This project was completed while training with the Hazza Institute of Technology. In this project the list of doctors with their information, location and price is displayed with the help of API integration. The purpose of this application is to provide a user-friendly interface and reliable user experience.</p>
                    </div>
                </div>    

                
            </section>
        </>
    );
}

export default Project;