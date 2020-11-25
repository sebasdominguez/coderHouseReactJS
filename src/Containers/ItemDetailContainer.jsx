import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/cartContext';
import ItemDetail from '../Components/ItemDetail/ItemDetail'

const ItemDetailContainer = ()=> {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0)
    const [, setCartItems] = useContext(Context) 

    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`)
        .then((item)=>{
            return item.json()
        })
        .then((itemJson)=>{
            setItem(itemJson)
        })
        .catch((error) => {
            console.log("Error al buscar el Item en la API: ", error);
        })
        .finally(() => {
            setLoading(false);
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleComprar = () => {
        setCartItems(currentCart => [...currentCart, item])
    }

    return (
            <ItemDetail loading={loading} item={item} setContador={setContador} contador={contador} handleComprar={handleComprar}/>
    )
}

export default ItemDetailContainer;