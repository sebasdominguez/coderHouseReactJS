import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

export default function Categories({list}) {

    return (
        <div className='categoryStyles'>
        {
            list && list.categories && list.categories.map((cat)=>(
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Body>
                        <Card.Title style={{ textTransform: 'uppercase' }}>{cat.name}</Card.Title>
                        <Card.Img variant="top" src={cat.image} />
                        <Card.Text>
                        {cat.description}
                        </Card.Text>
                        <Card.Link href={`/categories/${cat.id}`}>Ver {cat.name}</Card.Link>
                    </Card.Body>
                </Card>
            ))
        }
        </div>
    )
}
