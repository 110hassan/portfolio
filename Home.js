import "./App.css";
import { useContext, useEffect, useState } from "react";
import profilePic from "./ProfilePic.jpg"
import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";
import Skills from "./Skills";
import { AppContext } from "./context";
import {CgDarkMode} from "react-icons/cg";

function Home(){
    const [theme, setTheme] = useState("light-theme");
    function toggleTheme(){
        if(theme === "dark-theme"){
            setTheme("light-theme");
        }
        else{
            setTheme("dark-theme");
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const name = useContext(AppContext);
    return(
        <>
            <section id='Home'>
                <div className="text-container">
                    <h4>Welcome there,</h4>
                    <h1>I'm <span>{name}.</span> A passionate <span>software developer</span> with
                        <p>a motivation to learn and grow.</p> </h1>
                        <a href="Cv_MuhammadHassan.pdf" download="MuhammadHassan-CV.pdf"><button> Download CV</button></a> <button onClick={() => toggleTheme()} className="theme-changer"> <CgDarkMode/> </button>
                </div>
                <div className="img-container">
                    <img src={profilePic} alt="profile pic"/>

                </div>

                
            </section>
            <About/>
            <Project/>
            <Skills/>
            <Contact/>
        </>
    );
}

export default Home;