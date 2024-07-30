import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import { FaHome } from 'react-icons/fa';
import { FaRegUserCircle } from "react-icons/fa";
import { FaLeaf } from 'react-icons/fa';
const Footer = () => {
  return (
    
    <footer className="footer bg-green-950">
      <div className="footer-buttons ">
        <a href='/' className="footer-button"><FaHome /></a>
        <a href="/leaf" className="footer-button"><FaLeaf /></a>
        <a href="/info" className="footer-button"><FaInfoCircle /></a>
        <a href="/login" className="footer-button"><FaRegUserCircle /></a>
      </div>
    </footer>
  )
}

export default Footer