import React, {useState} from 'react';
import HomeContainer from './Containers/HomeContainer';
import { NavBar } from './Components/NavbarAfter/Navbar'
import './App.css';

function App() {

  const [tipo, setTipo] = useState('classic')

  return (
    <div>
      <NavBar type={tipo} setTipo={setTipo} />
      <HomeContainer greeting={"Bienvenido"}/>
    </div>
  );
}

export default App;
