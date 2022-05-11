import React from "react";

export default function CardPersonajes({image,name,species,url}) { //se desestructura props para no poner (props), se ponen las propiedades directamente, las contienen las llaves
  return (
      <div className="card col-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{species}</p>
          <a href={url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
  );
}
