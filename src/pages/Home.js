import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardPersonajes from '../components/CardPersonajes/CardPersonajes';

const Home = () => {
  const [personajes, setPersonajes] = useState([]);

  const obtenerPersonajes = async () => {
    const resp = await axios.get("https://rickandmortyapi.com/api/character");
    setPersonajes(resp.data.results);

    const { name, id, url } = resp.data.results[0]; // desestructuré datos del objeto, convirtiendolo en una variable para manipularlos afuera

    console.log(name);
    console.log(id);
    console.log(url);
  };

  useEffect(() => {
    //controla el renderizado del componente (los estados)
    obtenerPersonajes(); //
  }, []); //[] "se esperana ' " dice en error de consola

  return (
    <div>
      <main>
        <button onClick={obtenerPersonajes}>Consumir API</button>
        <section className="d-flex flex-wrap">
          {personajes.map((personaje) => (
            <CardPersonajes
              key={personaje.id}
              image={personaje.image}
              name={personaje.name}
              species={personaje.species}
              url={personaje.url}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
