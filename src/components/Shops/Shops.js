import React from 'react'
import Shop from './Shop/Shop'
import chickens from './icons/chickens.svg';
import fish from './icons/fish.svg';
import cheese from './icons/cheese.svg';
import meat from './icons/meat.svg';
import wine from './icons/wine.svg';
import Search from './Search/Search';




export default function Shops() {
    return (
        <>
        <Search/>
        <Shop shopId="1" icon={chickens}/>
        <Shop shopId="2" icon={fish}/>
        <Shop shopId="3" icon={cheese}/>
        <Shop shopId="4" icon={meat}/>
        <Shop shopId="5" icon={wine}/>
        </>
    )
}
