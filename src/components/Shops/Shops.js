import React from 'react'
import Shop from './Shop/Shop'
import chickens from './icons/chickens.svg';
import fish from './icons/fish.svg';
import cheese from './icons/cheese.svg';
import meat from './icons/meat.svg';
import wine from './icons/wine.svg';



export default function Shops() {
    return (
        <>
        <Shop name="TIENDA 1" icon={chickens}/>
        <Shop name="TIENDA 2" icon={fish}/>
        <Shop name="TIENDA 3" icon={cheese}/>
        <Shop name="TIENDA 4" icon={meat}/>
        <Shop name="TIENDA 5" icon={wine}/>
        </>
    )
}
