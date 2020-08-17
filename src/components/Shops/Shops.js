import React from 'react'
import Shop from './Shop/Shop'
import chickens from './icons/chickens.svg';


export default function Shops() {
    return (
        <>
        <Shop name="Tienda1" icon={chickens}/>
        <Shop name="Tienda2" icon={chickens}/>
        <Shop name="Tienda3" icon={chickens}/>
        <Shop name="Tienda4" icon={chickens}/>
        <Shop name="Tienda5" icon={chickens}/>
        </>
    )
}
