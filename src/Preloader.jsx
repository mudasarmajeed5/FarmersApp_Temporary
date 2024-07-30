import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import './Preloader.css'; // Import the CSS file for styling

const Preloader = () => {
    return (
        <div className="preloader">
            <FaLeaf className="leaf-icon" />
            <p className='.leaf-text text-2xl font-bold'>IntelliGrow</p>
        </div>
    );
};

export default Preloader;
