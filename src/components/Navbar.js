import React from 'react';
import '../style.css'
import ReactIconSmall from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img className='nav--icon' src={ReactIconSmall} alt='react logo'/>
            <h3 className='nav--icon_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )
}
