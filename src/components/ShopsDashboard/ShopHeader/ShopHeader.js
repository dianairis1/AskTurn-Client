import React from 'react'
import './ShopHeader.css';
import iconClose from './iconClose.svg';
import iconReturn from './iconReturn.svg';
import {Link} from 'react-router-dom';

export default function ShopHeader(props) {
    return (  
    <header className="container-1">
        <Link to='/shops'> <img src={iconReturn} alt=""></img></Link>
        <h1>TIENDA {props.shopId}</h1>
        <a href="#"> <img src={iconClose} alt=""></img></a>      
    </header>   
    )
}
