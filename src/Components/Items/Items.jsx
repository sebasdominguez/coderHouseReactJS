import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Contador from '../../Containers/CountContainer'
import './styleItems.css'

export default function Items({objetos}) {

    console.log(objetos)

    
    return (
        <div className="contItems">
            {   objetos && objetos.length ?             
                    objetos.map((item)=>
                        <Card key={item.id} style={{ width: '18rem', margin:'10px' }}>
                            <Link to={`/item/${item.id}`} className='links'>
                                <Card.Img variant="top" src={item.thumbnail} />
                            </Link>
                                <Card.Body>
                                    <Link to={`/item/${item.id}`} className='links'>
                                        <Card.Title className="price">${item.price}</Card.Title>
                                    </Link>
                                    <div className="contador">
                                    <Contador min='0' max='10'>Agregar</Contador>
                                    </div>
                                </Card.Body>
                        </Card>
                    )
                    :
                    <Spinner animation="border" variant="warning" />
             }
        </div>
    )
}
