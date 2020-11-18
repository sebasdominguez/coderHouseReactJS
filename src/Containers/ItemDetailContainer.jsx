import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const { id } = useParams();
    
    useEffect(()=>{
        console.log("id--->", id)
    }, [id])

    return (
        <div>
            ITEM DETAIL CONTAINER EN ITEM {id}
        </div>
    )
}
