import React from 'react'
import './Footer.css';

export default function Footer(props) {
    return (
        <div className="sec-button">
            <a className="button" href="#">{props.buttonTitle}</a>
        </div>
    )
}
