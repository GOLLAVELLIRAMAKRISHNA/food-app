import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {

    const [line, setLine] = useState("Home");
    const [navbarScrollY, setNavberScorllY] = useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
            setNavberScorllY(true)
        }
        else {
            setNavberScorllY(false)
        }
    })

    return (
        <>
            <nav className="navbar" id='home'>
                <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
                <ul className='navbar-menu'>
                    <Link to='/' onClick={_ => setLine("Home")} className={line === "Home" ? "active" : ""}>Home</Link>
                    <a href='#explore' onClick={_ => setLine("Menu")} className={line === "Menu" ? "active" : ""}>Menu</a>
                    <a href='#mobileapp' onClick={_ => setLine("Mobile-App")} className={line === "Mobile-App" ? "active" : ""}>Mobile App</a>
                    <a href='#contact' onClick={_ => setLine("Contact-Us")} className={line === "Contact-Us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="cart">
                        <Link to="/cart"><img onClick={() => setLine("Cart")} src={assets.basket_icon} alt="" /></Link>
                        <div className="dot"></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>Sign Up</button>
                </div>
            </nav>
            <a href="#home" className={navbarScrollY ? "navigate" : "hide-up-arrow"}>
                <FaArrowUp />
            </a>
        </>
    )
}

export default Navbar