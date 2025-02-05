//Mounted in 2 pages: AboutP.jsx and LandingP.jsx
//The BurgerMenu is prepped but not used as time run out and decision with designer was made to cut it out.

import { Link } from "react-router-dom"
import { Logo } from "../Logo"

import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu-toggle"><Link to="/about">≡</Link></div>
            <div className="navbar-logo"><Link to="/"><Logo /></Link></div>
            <div className="navbar-profile"><img src="/dvicon.png" alt="profile" /></div>
        </div>
    )
}

//If burger menu was to be used, left in learning purpose:
//import { BurgerMenu } from "../Burger/BurgerMenu"
//<BurgerMenu />

