import React from 'react';
import './Header.css';
import logo from '../../ema-john-resources/images/Logo.svg';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/shop">manage ripo</a>
                <a href="/shop">shop details</a>
            </nav>
        </div>
    );
};

export default Header;