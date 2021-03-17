import React from 'react'

/* Recursos e imagens */
import './MidiaSocial.css';
import linkedin from '../../asset/midia/linkedin.webp';
import facebook from '../../asset/midia/facebook.webp';
import instagram from '../../asset/midia/instagram.webp';


function MidiaSocial (){
    return(
        <>
            <ul className="social-content">
                <li className="social-list">
                    <a>
                        <img src={linkedin} width="70" height="70"/>
                    </a> 
                </li>
                <li className="social-list">
                    <a>
                        <img src={facebook} width="70" height="70"/>
                    </a>
                </li>
                <li className="social-list">
                    <a>
                        <img src={instagram} width="70" height="70"/>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default MidiaSocial