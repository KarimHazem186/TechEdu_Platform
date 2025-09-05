import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-top">
                    <NavLink to='/'><img src={assets.TechEdu_logo} alt="" /></NavLink>
                    <Link to="/signup"><button className="btn">Subscribe Now</button></Link>
                </div>
                <hr />
                <div className="footer-content-center">
                    <div className="center-left">
                        <h3>Contact</h3>
                        <p>Address: Egypt</p>
                        <p>Phone: +01014526490</p>

                    </div>
                    <div className="center-center">
                        <h3>My Account</h3>
                        <Link to="/login"><p>Sign In</p></Link>
                        <Link to="/cart"><p>View Cart</p></Link>
                        <Link to="/favourite"><p>My Favorite</p></Link>
                        <p>Help</p>
                    </div>
                    <div className="center-right">
                        <h3>Address</h3>
                        <p>Support Center</p>
                        <p>Privacy Policy </p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="center-social">
                        <h3>Social Media</h3>
                        <a href="https://www.facebook.com" target='_blank'><img src={assets.facebook} alt="facebook" /></a>
                        <a href="https://www.whatsapp.com" target='_blank'><img src={assets.whatsapp} alt="whatsapp" /></a>
                        <a href="https://www.youtube.com" target='_blank'><img src={assets.youtube} alt="youtube" /></a>
                        <a href="https://www.x.com" target='_blank'><img src={assets.twitter} alt="twitter" /></a>
                        <a href="https://www.linkedin.com" target='_blank'><img src={assets.linkedin} alt="linkedin" /></a>
                    </div>

                </div>
                <hr />
                <div className="footer-content-bottom">
                    <img src={assets.TechEdu_logo} alt="" />
                    <p>all copyrights reserved 2024©</p>
                </div>
            </div>
        </div>
    )
}

export default Footer