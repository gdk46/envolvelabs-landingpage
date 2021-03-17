import React from 'react'


import Button from '../Button/Button';
import NavMenu from './NavMenu';

/* Recursos e imagens */
import './Header.css';
import './MenuHamburger.css';
import logo from '../../asset/midia/envolvelabs.webp';


function Header (){
    return(
        <>
            <header className="header">
                <nav>
                    <input type="checkbox" id="checkbox-menu"/>
                    <label for="checkbox-menu" className="hamburguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <div className="logo-content">
                        <img src={logo} className="logo"/>
                    </div>

                    <NavMenu/>
                </nav>
            </header>
        </>
    )
}

export default Header