import React from 'react'
import iconGo from '../icons/iconGo.svg';
import '../../css/global.css';
import './shop.css';
import {Link} from 'react-router-dom';

export default function Shop(props) {
    return (
            <section>
                <h2>Tienda {props.shopId}</h2>
                <img src={props.icon} alt=""></img>
               <Link to={`/shops/${props.shopId}`}><img src={iconGo} alt=""></img></Link>
            </section>
    )
}