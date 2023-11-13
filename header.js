
import { NavLink } from 'react-router-dom';
import './App.css';
import { CgMenu , CgCloseR } from "react-icons/cg";
import { useState } from "react";

function Header(){
const [openMenu, setOpenMenu] = useState(false);

    return(
        <header>
            <span>M.Hassan</span>
            <button name='menu' className="mobile-nav-icon" onClick={() => setOpenMenu(true)}>
                <CgMenu />
            </button>
            {/*Here Navbar/menu starts */}
            <nav className={ openMenu ? "mobile-navbar-btns active" : "mobile-navbar-btns"}>
                <ul>
                    <li> <NavLink to="/"  onClick={() => setOpenMenu(false)}>HOME</NavLink></li>
                    <li><NavLink to="/About"  onClick={() => setOpenMenu(false)}>ABOUT ME</NavLink></li>
                    <li><NavLink to="/Projects"  onClick={() => setOpenMenu(false)}>MY PROJECTS</NavLink></li>
                    <li><NavLink to="/Skills"  onClick={() => setOpenMenu(false)}>SKILLS & QUALIFICATION</NavLink></li>
                    <li><NavLink to="/Contact"  onClick={() => setOpenMenu(false)}>CONTACT ME</NavLink></li>
                    
                </ul>
                <button name='close-btn' className="close-btn mobile-nav-icon" onClick={() => setOpenMenu(false)}>
                    <CgCloseR/>
                </button>
            </nav>
        </header>
    );
}

export default Header;