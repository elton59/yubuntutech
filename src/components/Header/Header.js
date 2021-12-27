import React from 'react';
import Navigation from '../Navigation';

import './Header.css';
import ubuntu from '../../assets/logo/ubuntu.png';
function Header() {
    return (
        <div className="stickysection">
        <div className='header'>
         <p className="headerimg"><img src={ubuntu} alt="ubuntu"/></p>
        </div>
        <div>
       <Navigation/>
       </div>
       </div>
    );
}

export default Header;