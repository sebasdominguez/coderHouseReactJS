import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Components/ItemDetail/ItemDetail'

const ItemDetailContainer = ()=> {

    const { id } = useParams();

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0)

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
    },[])

    useEffect(()=>{
        console.log("item",item)
    },[item])

    return (
            <ItemDetail loading={loading} item={item} setContador={setContador} contador={contador}/>
    )
}

export default ItemDetailContainer;