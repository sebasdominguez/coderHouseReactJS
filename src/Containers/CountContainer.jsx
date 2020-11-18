import React, { useState } from 'react'
import Count from '../Components/Count/Count'

export default function CountContainer({min, max}) {

    const [contador, setContador] = useState(0)

    const handleContador = (sign) => {
        if ( (sign === '+') && ((contador < max)) ) setContador(contador+1)
        else if ( (sign === '-') && (contador > min) ) setContador(contador-1)
    }

    return (
        <Count contador={contador} handleCount={handleContador} />
    )
}