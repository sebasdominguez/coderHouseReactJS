import React from 'react'
import { Button } from 'react-bootstrap'
import './count.css'

export default function Count({contador, onAdd, sumar}) {
    return (
        <div className='count'>
            <Button variant="danger" className='mr-4' onClick={()=>onAdd('-')}> - </Button>
            <div>
                {contador}
            </div>
            <Button variant="success" className='ml-4' onClick={()=>onAdd('+')}> + </Button>
        </div>
    )
}
