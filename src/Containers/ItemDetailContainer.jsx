import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/cartContext';
import { getFirestore } from '../firebase';
import ItemDetail from '../Components/ItemDetail/ItemDetail'

const ItemDetailContainer = ()=> {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0)
    const [, setCartItems] = useContext(Context) 

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        console.log("id itemContainter",id)
        const item = itemCollection.doc(id);
        item.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('El doc no existe');
                    return true;
                }
                const dataQuery = doc.data();
                setItem({ id: doc.id, ...doc.data() });
            })
            .catch((error) =>{
                console.log('Ocurrio un error', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id]);

    const handleComprar = () => {
        setCartItems(currentCart => [...currentCart, item])
    }

    return (
            <ItemDetail loading={loading} item={item} setContador={setContador} contador={contador} handleComprar={handleComprar}/>
    )
}

export default ItemDetailContainer;