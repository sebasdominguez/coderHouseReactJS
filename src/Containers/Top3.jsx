import React, { useState, useEffect } from 'react'
import { getFirestore } from '../firebase';
import Top3 from '../Components/Top3/Top3'

export default function Top3Container() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        let items = db.collection('items');
        let query = items.where("top3", "==", true);
        query.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No data!');
                }
                const queryItems = querySnapshot.docs.map(doc => {
                    return ({ id: doc.id, ...doc.data()});
                })
                setItems(queryItems);
            })
        setLoading(false);
    }, []);

    return (
        <Top3 items={items} loading={loading}/>
    )
}
