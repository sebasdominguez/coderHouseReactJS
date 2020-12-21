import React from 'react'
import { Spinner, Card, Button, Carousel } from 'react-bootstrap'
import Contador from '../../Containers/CountContainer'
import './itemDetailStyle.css'

export default function ItemDetail({item, loading, contador, setContador, handleComprar}) {

    return (
        loading ? 
            <Spinner animation="border" variant="warning" />
            :
            <div className='itemDetailCont'>
                <Card className="text-center" bg='secondary' text='white' style={{minHeight:'90vh'}}>
                <Card.Header>Detalles del Producto</Card.Header>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text> {item.description}</Card.Text>
                    <Carousel interval={1000} pause={'hover'}>
                        {item.pictures && item.pictures.map((picture)=>
                            <Carousel.Item key={picture.id}>
                                <img
                                    className="item"
                                    src={picture.url}
                                    alt="Imagen"
                                />
                            </Carousel.Item>
                        )}
                    </Carousel>
                   
                    <div className="contadorItem">
                        <Contador min={0} max={item.stock} contador={contador} setContador={setContador}>Agregar</Contador>
                    </div>
                    {
                        contador > 0 ? 
                            <Button variant="primary" onClick={handleComprar}>Comprar {contador}</Button>
                            :
                            <Button variant="primary" onClick={()=>setContador(contador+1)}>Quiero!</Button>
                    }
                </Card.Body>
                <Card.Footer className="text-white">{item.stock} en Stock!</Card.Footer>
                </Card>
            </div>
        )
}
