import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer';
import CartContainer from './Containers/CartContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { NavBar } from './Components/NavbarAfter/Navbar'
import './App.css';

function App() {

  const [tipo, setTipo] = useState('classic')

  return (
      <BrowserRouter>
        <NavBar type={tipo} setTipo={setTipo}/> 
        <Switch>
          <Route path='/item/:id' component={ItemDetailContainer}/> 
          <Route path='/cart' render={() => <CartContainer />}/>
          <Route path='/' render={() => <HomeContainer />} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
