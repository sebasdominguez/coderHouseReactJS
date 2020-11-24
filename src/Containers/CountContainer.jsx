import React, { useState, Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Count from '../Components/Count/Count'

export default function CountContainer({min, max, contador, setContador}) {
    
    const [show, setShow] = useState(false);

    const handleContador = (sign) => {
        if ( (sign === '+') && ((contador == max)) ) setShow(true) 
        if ( (sign === '+') && ((contador < max)) ) setContador(contador+1)
        else if ( (sign === '-') && (contador > min) ) setContador(contador-1)
    }

    return (
        <Fragment>
            <Count contador={contador} handleCount={handleContador} />
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Out of stock!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Alcanzó el maximo en stock</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
