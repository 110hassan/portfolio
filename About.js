import "./App.css";
import aboutPic from "./AboutPic.jpg"
import { AppContext } from "./context";
import { useContext } from "react";


function About(){
    const name = useContext(AppContext);
    return(
        <>
            <section id="AboutMe">

                <div id="img-container">
                    <h1>About Me</h1>
                    <img src={aboutPic} alt="About pic"/>
                </div>
               
                <div className="text-about-me" >

                    <p>
                        Hey there, My name is <span>{name}.</span> I'm a highly motivated, 
                        passionate and aspiring undergraduate student with a determination to learn 
                        and grow. As a ambitious individual, I possess a strong problem-solving mindset 
                        and approach challenges with enthusiasm.
                    </p>

                    <h3>Education:</h3>
                        <div className="education"><h4>DHA Suffa University</h4>
                        Bachelors Of Science in Computer Science (2020-2024)
                        </div>
                        <div className="education"><h4>DJ Sindh Government Science College</h4>
                        Intermediate (2018-2020)
                        </div>
                        <div className="education"><h4>St Paul's English High School</h4>
                        Matriculation (2008-2018)
                        </div>
        
                </div>

                
            </section>
        </>
    );
}

export default About;