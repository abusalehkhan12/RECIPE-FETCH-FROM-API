import React from 'react'
import Logo from './logo.png';

const nav = () =>{
    return (
        <div className="nav">
            <ul className="list">
                <li><img src={Logo} alt="LOGO"className="logo"/></li>
                <li><h2  className="nav-text">RECIPES OF THE TASTE</h2></li>               
            </ul>
        </div>
    )
}

export default nav
