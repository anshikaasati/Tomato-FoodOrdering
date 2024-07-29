import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className='footer-content'>
            <div className='foot-content-left'>
                <img src={assets.logo} alt="Tomato logo"/>
                <p>We sincerely hope that you’ll enjoy our services and discover exactly what you’re looking for.</p>
                <p>Stay connected with us on social media to get the latest updates and exclusive offers. Follow us to be the first to know about new arrivals that we have in store for you.</p>

                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="Facebook"/>
                    <img src={assets.twitter_icon} alt="Twitter"/>
                    <img src={assets.linkedin_icon} alt="LinkedIn"/>
                </div>
            </div>
            <div className='foot-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='foot-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-979-309-0256</li>
                    <li>contact@tomato.in</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
            Copyright 2024 © Tomato.com - All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer
