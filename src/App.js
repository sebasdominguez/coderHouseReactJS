import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer';
import CartContainer from './Containers/CartContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CategoryContainer from './Containers/CategoryContainer';
import CatContainer from './Containers/CatContainer';
import CartContext from './context/cartContext'
import Top3Container from './Containers/Top3';
import { NavBar } from './Components/NavbarAfter/Navbar'
import './App.css';

function App() {

  const [tipo, setTipo] = useState('classic')

  return (
      <CartContext>
        <BrowserRouter>
          <NavBar type={tipo} setTipo={setTipo}/> 
          <Switch>
            <Route path='/item/:id' component={ItemDetailContainer}/>
            <Route exact path='/categories/:id' component={CatContainer}/>
            <Route path='/categories' component={CategoryContainer}/>
            <Route path='/cart' render={() => <CartContainer />}/>
            <Route path='/top3' component={Top3Container}/>
            <Route path='/' render={() => <HomeContainer />} />
          </Switch>
        </BrowserRouter>
      </CartContext>
  );
}

export default App;
