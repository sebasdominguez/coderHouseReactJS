import React, {useState, useEffect} from "react";
import Items from '../Components/Items/Items'

const ItemContainer = () => {

    const [objetos, setObjetos] = useState([]);

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1743&limit=20')
        .then((response) => response.json())
        .then((data) => setObjetos(data.results));
      }, [])

    return (
          <Items objetos={objetos}/>
    )
} 

export default ItemContainer;