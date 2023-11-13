import "./App.css";
import {AiOutlineMail} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
import {MdLocationPin} from "react-icons/md";


function Contact(){
    return(
        <>  
           
            <section id="contact">
            <h1> Contact Me. </h1>

            <div className="contact-container">
                <div className="info-container">
                    <div> <MdLocationPin className="location"/>   <span>Karachi, Pakistan.</span> </div>
                    <div> <AiOutlineMail className="email"/>    <span> paulianhassan@gmail.com </span> </div>
                    <div> <FiPhoneCall className="phone"/>    <span> +92-3323877958</span> </div>
                </div>

                <div className="form-container">
                    <form>
                        <label htmlFor="name">Your name:</label><br/>
                        <input type="text" id="name" name="name" placeholder="Name"/><br/>
                        <label htmlFor="message">Message:</label><br/>
                    
                        <textarea id="message" name="message" rows="6" cols="30" placeholder="Enter message here...">
                        
                        </textarea> <br/>

                        <button onClick={() => alert("Your message has been sent successfully!!")}> Submit </button>
                    </form>
                </div>
            </div>


                
            </section>
        </>
    );
}

export default Contact;