import React from 'react'
import iconGo from '../icons/iconGo.svg';
import '../../css/global.css';
import './shop.css';

export default function Shop(props) {
    return (
            <section>
                <h2>{props.name}</h2>
                <img src={props.icon} alt=""></img>
                <a href="#"> <img src={iconGo} alt=""></img></a>
            </section>
    )
}