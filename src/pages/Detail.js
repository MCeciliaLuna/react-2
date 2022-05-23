import React, { useEffect, useState } from 'react';

const Detail = () => {

  const [personaje, setPersonaje] = useState({})

  const obtenerPersonaje = () => {
    const info = localStorage.getItem('personaje')

    const objetoInfo = JSON.parse(info)

    setPersonaje(objetoInfo)
  }
  useEffect(() => {
    obtenerPersonaje()
  }, [])

  console.log(personaje)

  return (
    <section>
      <h2>Detail Page</h2>
      <img src={personaje.image} alt="foto personaje" />
       <h3>Hola! Soy <strong>{personaje.name}</strong></h3>
       <h4>Mi especie es <strong>{personaje.species}a/o</strong></h4>
       {
         (personaje.episode?.length > 0) // decirle a react que ese array/objeto/dato con '?' es OPCIONAL >> sin: va a interpretar que era olbigatorio, si no lo recibe, ERROR
         && (personaje.episode.map((episodio, i) => <a key={i} className="me-1" href={episodio}>{i + 1}</a>))
       }
    </section>
  );
};

export default Detail;