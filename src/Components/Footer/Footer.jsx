import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <GiRunningShoe className='logo'/>
            <p>ShoeSphere</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <FaInstagram />
            </div>
            <div className="footer-icons-container">
                <FaPinterest />
            </div>
            <div className="footer-icons-container">
                <FaWhatsapp />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserverd.</p>
        </div>
    </div>
  )
}

export default Footer