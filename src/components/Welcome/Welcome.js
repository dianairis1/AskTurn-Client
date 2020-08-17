import React from 'react'
import logo from './AskTurnLogo.svg';
import './welcome.css';
import '../css/global.css';

export default function Welcome() {
    return (
        <div className="logo">
            <img src={logo}></img>
        </div>
    )
}
