import React from 'react'

import MidiaSocial from "../MidiaSocial/MidiaSocial"

/* Recursos e imagens */
import './Menu.css';

function NavMenu (){
    return(
        <>
            <div className="menu-container">
                <ul className="menu-content">
                    <li className="menu-list drop">
                        <span className="menu-title">O que nós fazemos</span>
                        <div>   
                            <div></div>    
                            <div></div>
                            <div></div>    
                            <div></div>    
                        </div>
                    </li>
                    <li className="menu-list">
                        <a><span className="menu-title">Portifólio</span></a> 
                    </li>
                    <li className="menu-list">
                        <a><span className="menu-title">Sobre</span></a> 
                    </li>
                    <li className="menu-list">
                        <a><span className="menu-title">Artigos</span></a> 
                    </li>
                    <li className="menu-list">
                        <a><span className="menu-title">Vagas</span></a> 
                    </li>
                    <li className="menu-list">
                        <a><span className="menu-title">Contato</span></a> 
                    </li>

                    <li className="menu-list mt-5">
                        <MidiaSocial/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavMenu