import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styleItems.css'

export default function Items({objetos}) {
    
    return (
        <div className="contItems">
            {   objetos && objetos.length ?             
                    objetos.map((item)=>
                        <Card key={item.id} className='cardItem' style={{ width: '18rem', margin:'10px', backgroundColor:'#d9d7d7' }}>
                            <Link to={`/item/${item.id}`} className='links'>
                                <Card.Img variant="top" src={item.thumbnail} />
                            </Link>
                                <Card.Body>
                                    <Link to={`/item/${item.id}`} className='links'>
                                        <Card.Title className="price">${item.price}</Card.Title>
                                    </Link>
                                </Card.Body>
                        </Card>
                    )
                    :
                    <Spinner animation="border" variant="warning" />
             }
        </div>
    )
}
