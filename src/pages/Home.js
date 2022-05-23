import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardPersonajes from '../components/CardPersonajes/CardPersonajes';

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajesFiltrados, setPersonajesFiltrados] = useState([])

  const obtenerPersonajes = async () => {
    const resp = await axios.get("https://rickandmortyapi.com/api/character");
    setPersonajes(resp.data.results);

    const { name, id, url } = resp.data.results[0]; // desestructuré datos del objeto, convirtiendolo en una variable para manipularlos afuera

    console.log(name);
    console.log(id);
    console.log(url);
  };
  
  const handleChange = e => {
    const especie = e.target.value

    const personajesParaFiltrar = personajes

    const personajesFiltrados = personajesParaFiltrar.filter(personaje => personaje.species === especie)

    setPersonajesFiltrados(personajesFiltrados)
  }

  useEffect(() => {
    //controla el renderizado del componente (los estados)
    obtenerPersonajes(); //
  }, []); //[] "se esperana ' " dice en error de consola

  return (
    <div>
      <select onChange={handleChange} className="form-select" aria-label="Default select example">
  <option selected >Selecciona la especie</option>
  <option value="Human">Human</option>
  <option value="Alien">Alien</option>
</select>
      <main>
        <button onClick={obtenerPersonajes}>Consumir API</button>
        <section className="d-flex flex-wrap">
          {
            personajesFiltrados.length > 0
            ? personajesFiltrados.map(personaje => <CardPersonajes key={personaje.id} image={personaje.image} name={personaje.name} species={personaje.species} url={personaje.url} id ={personaje.id} />)
            : personajes.map(personaje => <CardPersonajes key={personaje.id} image={personaje.image} name={personaje.name} species={personaje.species} url={personaje.url} id ={personaje.id} />)
          }
        </section>
      </main>
    </div>
  );
}

export default Home;
