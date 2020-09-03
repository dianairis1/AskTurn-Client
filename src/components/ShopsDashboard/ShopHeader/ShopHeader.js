import React from 'react'
import './ShopHeader.css';
import iconClose from './iconClose.svg';
import iconReturn from './iconReturn.svg';

export default function ShopHeader() {
    return (  
    <header className="container-1">
        <a href="#"> <img src={iconReturn} alt=""></img></a>
        <h1>TIENDA 1</h1>
        <a href="#"> <img src={iconClose} alt=""></img></a>      
    </header>   
    )
}
