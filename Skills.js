import "./App.css";



function Skills(){
    return(
        <>
            
            <section id="skills">
                <h1>Skills & Qualification</h1>
                <p>These are some of my achievements and statistics in the field of software development.</p>

                <div className="statistics">
                    <div id="flutter">
                        <span>Flutter</span>
                        <span id="flutter-60">60%</span>
                        <div className="w-100">
                            <div className="w-60"></div>
                        </div>
                    </div>
                    <div id="html">
                        <span>HTML5</span>
                        <span id="html-90">90%</span>
                        <div className="w-100">
                            <div className="w-90"></div>
                        </div>
                    </div>
                    <div id="css">
                        <span>CSS</span>
                        <span id="css-80">80%</span>
                        <div className="w-100">
                            <div className="w-80"></div>
                        </div>
                    </div>
                    <div id="react">
                        <span>React</span>
                        <span id="react-60">60%</span>
                        <div className="w-100">
                            <div className="w-60"></div>
                        </div>
                    </div>
                    <div id="dotnet">
                        <span>.Net</span>
                        <span id="dotnet-50">50%</span>
                        <div className="w-100">
                            <div className="w-50"></div>
                        </div>
                    </div>
                    <div id="sql">
                        <span>SQL</span>
                        <span id="sql-70">70%</span>
                        <div className="w-100">
                            <div className="w-70"></div>
                        </div>
                    </div>

                </div>

                <h3>Certfifcates:</h3>
                <ol>
                    <li>Training in <b>Mobile Application Development</b> with <i>Hazza Institute of Technology.</i> </li>
                    <li><b>Chatbot</b> Building Essentials - <i>IBM Via Coursera.</i></li>
                    <li><b>.Net</b> Full Stack Foundation - <i>Board Infinity Via Coursera.</i></li>
                    <li>Building Web Applications in <b>PHP</b> - <i>University of Michigan Via Coursera.</i></li>
                    <li><b>AI</b> for everyone - <i>Deep Learning.AI Via Coursera.</i></li>
                </ol>

                
            </section>
            
        </>
    );
}

export default Skills;