import React from 'react'
import { Button } from 'react-bootstrap'
import './count.css'

function Count({contador, handleCount}) {

    return (
        <div className='count'>
            <Button variant="danger" className='mr-4' onClick={()=>handleCount("-")} > - </Button>
            <div>
                {contador}
            </div>
            <Button variant="success" className='ml-4' onClick={()=>handleCount("+")}> + </Button>
        </div>
    )
}

export default Count;