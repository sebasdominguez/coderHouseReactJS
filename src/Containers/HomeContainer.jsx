import React from "react";
import Home from '../Components/Home/Home'

const HomeContainer = ({greeting}) => {

  const usuario = 'Sebastian'

 return (
      <Home greeting={greeting} name={usuario}/>
 )

} 

export default HomeContainer;