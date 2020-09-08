
import React from 'react';
import ShopHeader from './ShopHeader/ShopHeader';
import CountDown from './CountDown/CountDown';
import Turns from './Turns/Turns';
import Footer from './Footer/Footer';

export default function ShopsDashboard(props) {
    return (
        <div>
            <ShopHeader shopId={props.match.params.shopId}/> 
            <CountDown/>
            <Turns title="Turnos en espera" turnNumber={0} />
            <Turns title="Tu turno" turnNumber={0} />
            <Footer buttonTitle="Unirse a la fila"/> 
        </div>
    )
}



 