
import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Project from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import MainHeader from './MainHeader';
import Footer from './Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainHeader/>}> 
            <Route index element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Projects" element={<Project/>}></Route>
            <Route path="/Skills" element={<Skills/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Route>    
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
    
      

  );
}

export default App;
