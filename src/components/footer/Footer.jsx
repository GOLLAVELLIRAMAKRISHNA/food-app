import { assets } from '../../assets/assets.js'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nesciunt tempore repudiandae mollitia voluptate quaerat, vel ab vero quo voluptates aliquid illo optio? in Sapiente nobis voluptatibus cum temporibus rerum? Aut?</p>
                    <div className="footer-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-942-839-3829</li>
                        <li>tomatocontact@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>Copyright 2024 @ tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer