import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">PiPiLiCa Tour Member List</h1>
            <p>Explore the World through the Tour</p>
            <h2>Total Budget : <b className="white">50,000.00 BDT</b> </h2>
        </div>
    );
};

export default Header;