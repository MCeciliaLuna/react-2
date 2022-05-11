import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonajes from "./components/CardPersonajes/CardPersonajes";

function App() {
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
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
