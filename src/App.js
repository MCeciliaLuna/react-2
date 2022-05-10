import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import { useState } from 'react';
import CardPersonajes from './components/CardPersonajes/CardPersonajes';

function App() {

  const [personajes, setPersonajes] = useState({})

  const obtenerPersonajes = async() => {
    const resp = await axios.get('https://rickandmortyapi.com/api/character')
    setPersonajes(resp.data.results)
  }

  return (
    <div>
    <Navbar />
    <button onClick={obtenerPersonajes}>Consumir API</button>
    <CardPersonajes />
    <Footer />
    </div>
  );
}

export default App;
